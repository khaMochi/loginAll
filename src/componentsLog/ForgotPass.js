import mochiImg from '../assets/img/Mochi thong bao-01 1.png'
function ForgotPass({setForgotPass}){
    let textH2='Bạn hãy inbox cho Mochi để được hỗ trợ đổi mật khẩu nhé';

    return <div onClick={e=>setForgotPass(0)} className='overPlayBlack'>
        <div onClick={e=>e.stopPropagation()} className='cardForgotPass'>
        <i onClick={e=>setForgotPass(0)} className="closePopup fa-duotone fa-xmark"></i>
            <img  src={mochiImg} />
            <h2>{textH2}
            </h2>
         <button className='submitButtonForm--good'>INBOX CHO MOCHI</button>
        </div>
    </div>
}
export default ForgotPass;