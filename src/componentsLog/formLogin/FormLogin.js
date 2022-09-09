import HandelShow from '../reuse/Show_Hidden-text';
import {useEffect, useState} from 'react';
import {ApiLoginEmail} from '../../API/apiTeam';
import {Context} from '../../App';
import {useContext} from 'react';
import axios from 'axios';
import RedirectWeb from '../../HandelALL/RedirectWeb';
function handelValidateEmail(text,setThrowErroEmail){
  if (!(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(text))&&text.length!=0) {
  setThrowErroEmail('* Email không đúng') }
  else {
  setThrowErroEmail('') }
            }

function handelValidatePassword(text,setThrowErroPassword,erroPass){
if (text.length<6&&text.length>0) {
  setThrowErroPassword('* Mật khẩu phải tối thiểu 6 ký tự') }
else if (erroPass) {
  setThrowErroPassword('* Mật khẩu bạn nhập không đúng') }
else{ setThrowErroPassword('') }
                                                                    }

function FormLogin(){
  const [valueEmail,setValueEmail]=useState('');
  const [valuePassword,setValuePassword]=useState('');
  const [controllPassword,setControllPassword]=useState(1);
  const [ThrowErroEmail,setThrowErroEmail]=useState('');
  const [ThrowErroPassword,setThrowErroPassword]=useState('');
const [ready,setReady]=useState(0);
const {setPopUpLogSuccess}=useContext(Context);
useEffect(()=>{
if(!(ThrowErroEmail||ThrowErroPassword)){
  if(valueEmail.length&&valuePassword.length){
    setReady(1); return }
 }
if(ready){
  setReady(0);return
         }
},[valuePassword,valueEmail]);

   function SubmitForm(e){
   
  if(ready){
    const headers={ DeviceType:4,
      PrivateKey:'M0ch1M0ch1_En_$ecret_k3y'}
const Body_data={
  email:valueEmail,
  password:valuePassword
}
   axios.post(ApiLoginEmail,{...Body_data},{headers})
   .then(response=>{
    if(response.data.code){
     localStorage.setItem('user_token',response.data.user.user_token);
     setPopUpLogSuccess(1);
     RedirectWeb()
    }
    else{
      handelValidatePassword(valuePassword,setThrowErroPassword,true)
    }
   })
   
  }
  else{
  e.preventDefault();
     }
   } 

    return <form className='formLogin'>
    <div className='backgroundUseName'>
      <input value={valueEmail} 
     onChange={(e)=>{
      let value=e.target.value;
      setValueEmail(value);
      handelValidateEmail(value,setThrowErroEmail)}}
        className={'inputType ' + (ThrowErroEmail?'inputType--invalid':'')} type='text' placeholder="Nhập email tài khoản học"/>
       <p className='messageErroInput'>{ThrowErroEmail}</p>
   </div>

   <div  className='backgroundPassword'>
     <input 
     value={valuePassword}
     className={'inputType ' + (ThrowErroPassword?'inputType--invalid':'')}
    onChange={(e)=>{
     let value=e.target.value;
     setValuePassword(value);
     handelValidatePassword(value,setThrowErroPassword)}}
     type={controllPassword?'password':'text'}
     placeholder="Nhập chính xác mật khẩu của bạn" />

     <HandelShow  controllEl={[controllPassword,setControllPassword]}/>
      <p className='messageErroInput'>{ThrowErroPassword}</p>
   
    </div>

      <button onClick={SubmitForm} type='button' className={
  (ready?'submitButtonForm--good':' submitButtonForm--invalid')}>Đăng nhập</button>
    </form>
}
export default FormLogin;