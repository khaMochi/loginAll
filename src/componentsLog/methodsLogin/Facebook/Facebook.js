import {ApiLoginOrRegisterFbGg} from '../../../API/apiTeam'
import {signInWithPopup} from 'firebase/auth'
import {auth,providerFacebook} from '../firebase/Authentication'
import handelDataLoginAngSingupFbGg from '../../reuse/handelDataLogin';
import axios from 'axios'
import {RedirectWeb} from '../../index';
import {Context} from '../../../App';
import {useContext} from 'react';
 async function signWithFacebook(setPopUpLogSuccess,setPopUpLogRegister){
 try{
    let data = await signInWithPopup(auth,providerFacebook);
    const need = handelDataLoginAngSingupFbGg(data,'facebook');
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
    console.log('erro');

   }
 }
 
 function Facebook({text}){
  const {setPopUpLogSuccess,setPopUpLogRegister} = useContext(Context);
    let valueButton=text?'Tạo tài khoản với Facebook':'Đăng nhập với Facebook';


    return (<button onClick={()=>{signWithFacebook(setPopUpLogSuccess,setPopUpLogRegister);}} className = 'buttonMethod--facebook'>
        <i className="fa-brands fa-facebook-f"></i>
        {valueButton}</button>)
 }
export default Facebook;