import mochiSuccessLogin from '../../../assets/image/mochiSuccessLogin.png';
import {ReactComponent as X_Icon} from "../../../assets/image/svg/X_Icon.svg";
import {ContextIndex} from "../../../App";
import {useContext} from 'react';

function MessageSuccess() {
    const [popUp, setPopUp] = useContext(ContextIndex);

    return (
        <div className='overPlayBlack'>
            <div className='cardForgotPass'>
                <img src={mochiSuccessLogin}/>
                <span onClick={() => setPopUp({type: 'successLogin'})}
                      className='closePopup'>
                    <X_Icon/>
                </span>
                <h3 className='forgotTitlePopup'>Bạn đã đăng nhập thành công !!!</h3>
            </div>
        </div>
    )
}

export default MessageSuccess;