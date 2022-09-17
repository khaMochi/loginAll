import React from 'react';
import BackgroundPage from "../Background/index";
import "../Pop-up/pop-up.scss";


const PopupPage = (props) => {
    return (
        <BackgroundPage>
            <div className="pop-up">
                {props.children}
            </div>
        </BackgroundPage>
    )
}

export default PopupPage;