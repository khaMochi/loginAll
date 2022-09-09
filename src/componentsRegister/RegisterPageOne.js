import imgMochi from '../assets/img/Mochi-meomeo2-01 1.png'
import Facebook from '../componentsLog/methodsLogin/Facebook/Facebook';
import Google from '../componentsLog/methodsLogin/Google/Google';
import {redirect} from '../App'
function RegisterPageOne({setPageCurrent}){
 


    return(
        <>
          <h1 className='header'>
            <i className='fa-solid fa-xmark' onClick={()=>{window.location.href=redirect}}></i>Tạo tài khoản mới</h1>
            <h2 className='title-Mochi title-Mochi--register'>Bạn muốn tạo tài khoản mới bằng cách nào nhỉ?</h2>
      <img className='imgRegister' src={imgMochi} />
             <div className='registerMethod'>
             <Facebook text={true}/>
             <Google text={true}/>
            <p className="hoacP">Hoặc</p>
    <button onClick={()=>setPageCurrent(2)} className='buttonCreateAcc'>Tự tạo tài khoản với email</button>
             </div>
        </> )
}
export default RegisterPageOne