import {signInWithPopup} from 'firebase/auth'
import {auth,providerGoogle} from '../firebase/Authentication'
import handelDataLoginAngSingupFbGg from '../../reuse/handelDataLogin'
import axios from 'axios';
import { ApiLoginOrRegisterFbGg } from '../../../API/apiTeam';
import {RedirectWeb} from '../../index';

import {Context} from '../../../App';
import {useContext} from 'react'
const signInWithGoogle=async (setPopUpLogSuccess,setPopUpLogRegister)=>{
  try{
  let data =  await signInWithPopup(auth,providerGoogle);
    const need = handelDataLoginAngSingupFbGg(data);
   const response = await axios.post(ApiLoginOrRegisterFbGg,{...need.Bodydata},{headers:need.headers})
   localStorage.setItem('user_token',response.data.user.user_token)
   if (window.location.pathname == '/register') {
    setPopUpLogRegister(1);
   }
   else{
    setPopUpLogSuccess(1);

   }
   RedirectWeb();
  
  }

   catch(err){
    console.log(err);

   }
}
function Google({text}){
  const {setPopUpLogSuccess,setPopUpLogRegister} = useContext(Context);

let valueButton = text?'Tạo tài khoản với':'Đăng nhập với';
    return (<button className = 'buttonMethod--google' onClick={()=>{
      signInWithGoogle(setPopUpLogSuccess,setPopUpLogRegister);
    }}> 
   <i className = "fa-brands fa-google-plus-g"></i> {valueButton}
   <i className = "fa-brands fa-google-plus-g"></i></button>)
}
export default Google;