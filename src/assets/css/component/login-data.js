import {AiOutlineGooglePlus, AiFillApple} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import {googleLoginMethod, facebookLoginMethod, appleLoginMethod, } from '../../../utils/firebase-config';
export const data = {
    googleLogin : {
        id: "btn-login-google",
        buttonName: "Đăng nhập với G+",
        buttonColor: "#D21919",
        buttonIcon: <AiOutlineGooglePlus/>,
        buttonShadowColor: "rgba(210, 25, 25, 0.2)",
        methodOfbutton: googleLoginMethod,
    },
    facebookLogin : {
        id: "btn-login-facebook",
        buttonName: "Đăng nhập với Facebook",
        buttonColor: "#007BFE",
        buttonIcon: <FaFacebookF/>,
        buttonShadowColor: "rgba(0, 123, 254, 0.2)",
        methodOfbutton: facebookLoginMethod,
        
    },
    appleLogin : {
        id: "btn-login-apple",
        buttonName: "Đăng nhập với Apple",
        buttonColor: "#000000",
        buttonIcon: <AiFillApple/>,
        buttonShadowColor: "rgba(0, 0, 0, 0.2)",
        methodOfbutton: appleLoginMethod,
        
    }
    
}
export const dataSignup = {
    googleSignup : {
        id: "btn-login-google",
        buttonName: "Tạo tài khoản với G+",
        buttonColor: "#D21919",
        buttonIcon: <AiOutlineGooglePlus/>,
        buttonShadowColor: "rgba(210, 25, 25, 0.2)",
        methodOfbutton: googleLoginMethod,

    },
    facebookSignup : {
        id: "btn-login-facebook",
        buttonName: "Tạo tài khoản với Facebook",
        buttonColor: "#007BFE",
        buttonIcon: <FaFacebookF/>,
        buttonShadowColor: "rgba(0, 123, 254, 0.2)",
        methodOfbutton: facebookLoginMethod,

    },
    normal : {
        id: "btn-login-normal",
        buttonName: "Tự tạo tài khoản với email",
        buttonColor: "#FFFFFF",
        buttonIcon: "",
        buttonShadowColor: "rgba(238, 224, 231, 0.8)"
        
    }
}