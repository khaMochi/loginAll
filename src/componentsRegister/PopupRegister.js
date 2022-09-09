import {Context} from '../App'
import {useContext} from 'react'
import moreImg from '../assets/img/mochiSuccessLogin.png'
function PopUpLogRegister(){
    const {setPopUpLogRegister}=useContext(Context);
        let textH2='Bạn đã tạo tài khoản thành công và mở khóa các tính năng của extension'; 
  return (
      <div className='overPlayBlack'>
     <div onClick={e=>e.stopPropagation()} className='successLog cardForgotPass'>
         <i onClick={e=>setPopUpLogRegister(0)} className="closePopup fa-duotone fa-xmark"></i>
               <img  src={moreImg} />
              <h2>{textH2}
            </h2>
       </div>
 </div>)
}
 export default PopUpLogRegister;
 