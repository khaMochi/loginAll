import {ReactComponent as X_Icon} from "../../../assets/image/svg/X_Icon.svg";
import imgMochi from '../../../assets/image/Mochi thong bao-01 1.png';
import {ContextIndex} from "../../../App";
import {useContext} from 'react';

function MessageForgot() {
    const [popUp, setPopUp] = useContext(ContextIndex);
    return (
        <div className='overPlayBlack'>
            <div className='cardForgotPass'>
                <img src={imgMochi}/>
                <span
                    onClick={() => setPopUp({type: 'forgot'})}
                    className='closePopup'>
                    <X_Icon/>
                </span>
                <h3 className='forgotTitlePopup'>Bạn hãy inbox cho Mochi để được hỗ trợ đổi mật khẩu nhé</h3>
                <a href='123' className=' submitButtonForm submitButtonForm__good '>INBOX CHO MOCHI</a>
            </div>
        </div>
    )
}

export default MessageForgot;