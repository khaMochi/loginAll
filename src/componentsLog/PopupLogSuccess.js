import mochiImg from '../assets/img/mochiSuccessLogin.png'
import {Context} from '../App';
import {useContext} from 'react';

function PopupLogSuccess(){
    const {setPopUpLogSuccess}=useContext(Context);
    let textH2='Bạn đã đăng nhập thành công !!!';

    return (
    <div  className='overPlayBlack'>
        <div onClick={e=>e.stopPropagation()} className='successLog cardForgotPass'>
         <i onClick={e=>setPopUpLogSuccess(0)} className="closePopup fa-duotone fa-xmark"></i>
            <img  src={mochiImg} />
            <h2>{textH2}
            </h2>
        </div>
    </div>)
}
export default PopupLogSuccess;