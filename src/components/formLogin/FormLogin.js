import HandelShow from '../reuse/Show_Hidden-text'
import {useState} from 'react'
function FormLogin(){
  const [valueUsername,setValueUsername]=useState('');
  const [controllPassword,setControllPassword]=useState(1);
  //1 show thì input là password
  //0 hidden thì input là text

    return <form className='formLogin'>
   
   <input value={valueUsername} 
    onChange={(e)=>{setValueUsername(e.target.value)}}
    className='inputType' type='text' placeholder="Nhập email tài khoản học"/>
   
   <div className='backgroundPassword'><input className='inputType'
    type={controllPassword?'password':'text'}
     placeholder="Nhập chính xác mật khẩu của bạn"/>
   
   <HandelShow  controllEl={[controllPassword,setControllPassword]}/></div>
<button type='button' className='submitButtonForm submitButtonForm--invalid'>Đăng nhập</button>
    </form>
}
export default FormLogin;