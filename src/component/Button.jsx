import React, {useState} from 'react'
import "../assets/css/component/Button.scss"
import {data, dataSignup} from "../assets/css/component/login-data"

const {googleLogin, facebookLogin, appleLogin} = data;
const {googleSignup, facebookSignup, normal} = dataSignup;
export const Button = (props) => {
    const {id, buttonName, buttonColor, buttonIcon, buttonShadowColor, methodOfbutton} = props;


    const handleOnClick = () => {
        if (methodOfbutton) {
            methodOfbutton()
        }
    }

    return (
        <>
            <div className="button-box">
                <button
                    className={`button-box__item`}
                    style={{backgroundColor: buttonColor}}
                    id={id}
                    onClick={() => handleOnClick()}
                >
                    {buttonIcon}{buttonName}
                </button>

                <div className="button-box__shadow" style={{backgroundColor: buttonShadowColor}}/>
            </div>
        </>
    )
}

export const ButtonLoginGoogle = () => {
    return Button(googleLogin);
}

export const ButtonLoginFacebook = () => {
    return Button(facebookLogin);
}

export const ButtonLoginApple = () => {
    return Button(appleLogin);
}

export const ButtonSignupGoogle = () => {
    return Button(googleSignup);
}
export const ButtonSignupFacebook = () => {
    return Button(facebookSignup);
}
export const ButtonSignup = () => {
    return Button(normal);
}
