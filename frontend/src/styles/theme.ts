import { createTheme } from "@mui/material";
import { CustomTypographyOptions } from "../types/mui/theme";
import { koKR } from "@mui/x-date-pickers/locales";

// 폰트
// import PretendardBlack from "../../public/font/Pretendard-Black.woff2";
// import PretendardBold from "../../public/font/Pretendard-Bold.woff2";
// import PretendardExtraBold from "../../public/font/Pretendard-ExtraBold.woff2";
// import PretendardExtraLight from "../../public/font/Pretendard-ExtraLight.woff2";
// import PretendardLight from "../../public/font/Pretendard-Light.woff2";
// import PretendardMedium from "../../public/font/Pretendard-Medium.woff2";
// import PretendardRegular from "../../public/font/Pretendard-Regular.woff2";
// import PretendardSemiBold from "../../public/font/Pretendard-SemiBold.woff2";
// import PretendardThin from "../../public/font/Pretendard-Thin.woff2";

export const primaryPalette = {
  main: "#7360FF",
  50: "#EEEBFF",
  100: "#D3CDFD",
  200: "#BFB7FD",
  300: "#ACA1FC",
  400: "#A093FB",
  500: "#8D7DFB",
  600: "#806FFA",
  700: "#7360FF",
  800: "#462DFF",
  900: "#1E00F9",
  1000: "#1800C6",
  1100: "#120093",
  1200: "#0B0060",
  1300: "#05002D",
};

const redPalette = {
  main: "#E80E42",
};

const greenPalette = {
  main: "#4FC98C",
};

const bluePalette = {
  main: "#0099FF",
};

const textPalette = {
  primary: "#222222",
  balck: "#222222",
  white: "#FFFFFF",
  gray900: "#343A40",
  gray800: "#495057",
  gray700: "#666666",
  gray600: "#868E96",
  gray500: "#ADB5BD",
  gray400: "#E5E5E5",
  gray300: "#E9ECEF",
  gray200: "#F2F2F2",
  gray100: "#F5F5F5",
  gray50: "#F3F7FA",
};

const customTypography: CustomTypographyOptions = {
  h1: {
    fontSize: "40px",
    fontWeight: 700,
    // lineHeight: "47px",
  },
  h2: {
    fontSize: "36px",
    fontWeight: 700,
    // lineHeight: "42px",
  },
  h3: {
    fontSize: "32px",
    fontWeight: 700,
    // lineHeight: "38px",
  },
  h4: {
    fontSize: "24px",
    fontWeight: 700,
    // lineHeight: "28px",
  },
  h5: {
    fontSize: "20px",
    fontWeight: 700,
    // lineHeight: "23px",
  },
  h6: {
    fontSize: "16px",
    fontWeight: 700,
    // lineHeight: "19px",
  },
  h7: {
    fontSize: "14px",
    fontWeight: 700,
    // lineHeight: "16px",
  },
  h8: {
    fontSize: "12px",
    fontWeight: 700,
    // lineHeight: "14px",
  },
  t1: {
    fontSize: "24px",
    fontWeight: 600,
    // lineHeight: "38px",
  },
  t2: {
    fontSize: "20px",
    fontWeight: 600,
    // lineHeight: "32px",
  },
  t3: {
    fontSize: "18px",
    fontWeight: 600,
    // lineHeight: "28px",
  },
  t4: {
    fontSize: "16px",
    fontWeight: 600,
    // lineHeight: "22px",
  },
  t5: {
    fontSize: "14px",
    fontWeight: 600,
    // lineHeight: "22px",
  },
  t6: {
    fontSize: "13px",
    fontWeight: 600,
    // lineHeight: "20px",
  },
  t7: {
    fontSize: "12px",
    fontWeight: 600,
    // lineHeight: "19px",
  },
  b1: {
    fontSize: "24px",
    fontWeight: 400,
    // lineHeight: "40px",
  },
  b2: {
    fontSize: "20px",
    fontWeight: 400,
    // lineHeight: "34px",
  },
  b3: {
    fontSize: "18px",
    fontWeight: 400,
    // lineHeight: "31px",
  },
  b4: {
    fontSize: "16px",
    fontWeight: 400,
    // lineHeight: "27px",
  },
  b5: {
    fontSize: "14px",
    fontWeight: 400,
    // lineHeight: "24px",
  },
  b6: {
    fontSize: "13px",
    fontWeight: 400,
    // lineHeight: "22px",
  },
  b7: {
    fontSize: "12px",
    fontWeight: 400,
    // lineHeight: "20px",
  },
  b8: {
    fontSize: "10px",
    fontWeight: 400,
    // lineHeight: "11px",
  },
};

export const theme = createTheme(
  {
    palette: {
      primary: primaryPalette,
      red: redPalette,
      green: greenPalette,
      blue: bluePalette,
      text: textPalette,
      divider: "#E5E5E5",
    },
    typography: {
      fontFamily: ["Pretendard", "Roboto", "Arial"].join(" "), // 추후 폰트 추가
      ...customTypography,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            overflow: "hidden",
          },
          body: {
            overflow: "auto !important",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            height: "100vh",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          sizeSmall: {
            height: "32px",
            boxShadow: "none",
          },
          sizeMedium: {
            height: "40px",
            boxShadow: "none",
          },
          sizeLarge: {
            height: "48px",
            boxShadow: "none",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            input: {
              fontSize: "14px",
              "&::placeholder": {
                color: "#666666",
                fontSize: "14px",
              },
            },
            "& .MuiInputBase-root": {
              paddingBottom: "5px",
              "&:before": {
                borderBottom: "1px solid #E5E5E5",
              },
            },
            "& .MuiFormLabel-root": {
              color: "black !important",
            },
            "& .MuiFormLabel-asterisk": {
              color: "red",
            },
            textarea: {
              fontSize: "14px",
              "&::placeholder": {
                color: "#666666",
                fontSize: "14px",
              },
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            marginRight: 0,
          },
        },
      },
      MuiBottomNavigation: {
        styleOverrides: {
          root: {
            width: "100vw",
            "& .MuiSvgIcon-root": {
              marginBottom: 4,
            },
            "& .MuiBottomNavigationAction-label": {
              fontSize: 10,
              lineHeight: "12px",
            },
            "& .Mui-selected": {
              fontSize: "10px !important",
              lineHeight: "12px",
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: "##A7A7A7",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            height: "48px",
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          sizeSmall: {
            width: "20px",
            height: "20px",
            minHeight: 0,
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          TouchRippleProps: {
            style: {
              color: "#7360FF",
            },
          },
        },
      },
    },
  },
  koKR
);
