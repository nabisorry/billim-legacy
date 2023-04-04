package com.side.billim.login.config.auth.dto;

import lombok.Getter;
import com.side.billim.login.domain.user.User;

import java.io.Serializable;

@Getter
public class SessionUser implements Serializable {

    private String name;
    private String email;

    public SessionUser(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
    }
}