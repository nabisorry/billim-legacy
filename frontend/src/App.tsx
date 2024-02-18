// 외부모듈
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";

// 내부모듈
import DesktopPage from "@pages/common/DesktopPage";
import HomePage from "@pages/HomePage";

function App() {
  const navigator = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  return <div>{isMobile ? <HomePage /> : <DesktopPage />}</div>;
}

export default App;
