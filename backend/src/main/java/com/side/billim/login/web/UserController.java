package com.side.billim.login.web;

import com.side.billim.login.domain.user.User;
import com.side.billim.login.domain.user.UserRepository;
import com.side.billim.login.service.UserService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Controller
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:7777")
public class UserController {
  private final UserRepository userRepository;
  private final UserService userService;


  // 로그인 처리 후에 호출되는 콜백 URL
  @GetMapping("/oauth_login")
  @ApiOperation(value = "소셜 로그인", notes = "소셜 로그인 API")
  public String oauth2Callback(OAuth2AuthenticationToken authentication, Model model, @RequestParam("oauthId") String oauthId, RedirectAttributes re) {

    String name = (String) authentication.getPrincipal().getAttributes().get("name");
    String email = (String) authentication.getPrincipal().getAttributes().get("email");

    String user = userRepository.checkEmail(email);
    Long id = userRepository.checkId(email);

    re.addAttribute("userName", name);
    re.addAttribute("userEmail", email);
    re.addAttribute("oauthId", oauthId);
    re.addAttribute("id", id);

    if(user == null || user == ""){
      return "redirect:/user/login";
    }else {
      return "redirect:/main";
    }

  }

  @GetMapping("/login")
  @ApiOperation(value = "추가 회원가입", notes = "추가 회원가입 API")
  public ResponseEntity<List> login(@RequestParam("userName") String userName, @RequestParam("userEmail") String userEmail
                                  , @RequestParam("oauthId") String oauthId, @RequestParam("id") Long id) {
      List users = new ArrayList();
      users.add(userName);
      users.add(userEmail);
      users.add(oauthId);
      users.add(id);
    return new ResponseEntity<>(users, HttpStatus.OK);
  }

  @RequestMapping(value = "/logout", method = RequestMethod.POST)
  @ApiOperation(value = "로그아웃", notes = "로그아웃 API")
  public void logout(HttpServletRequest request) throws ServletException {
    // 로그아웃 처리
    request.logout();
  }

  @GetMapping("/chkUser")
  @ApiOperation(value = "닉네임 중복체크", notes = "닉네임 중복체크 API")
  public ResponseEntity<Boolean> checkNicknameDuplicate(@RequestParam("nickName") String nickName){

    Optional<String> name = userRepository.checkNickname(nickName);

    if(name.isPresent()) {
      return ResponseEntity.status(HttpStatus.OK).body(false);
    }
    return ResponseEntity.status(HttpStatus.OK).body(true);
  }

}
