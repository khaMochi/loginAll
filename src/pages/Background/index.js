import React from 'react'
import "./background.scss"
import CloudImg from "../../assets/image/cloud.png"

const BackgroundPage = (props) => {
    return (
        <div className="background">
            <img src={CloudImg} className="background__image--top--right" alt="background_image"/>
            <img src={CloudImg} className="background__image--left--center" alt="background_image"/>
            <img src={CloudImg} className="background__image--right--bottom" alt="background_image"/>
            {props.children}

        </div>
    )
}

export default BackgroundPage;