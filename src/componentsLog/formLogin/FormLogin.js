import HandelShow from '../reuse/Show_Hidden-text';
import {useEffect, useState,useReducer} from 'react';
import {Context} from '../../App';
import {useContext} from 'react';
import emailDataLogin from '../reuse/emailDataLogin';
import RedirectWeb from '../../HandelALL/RedirectWeb';
import Reducer from '../../componentsRegister/ReducerRedisterEmail'
import {initial} from '../../componentsRegister/RegisterEmail'
function FormLogin() {
const [state, dispatch]=useReducer(Reducer,initial);
const [ready, setReady]=useState(0);
const [controll, setControll]=useState(1);
const {setPopUpLogSuccess}=useContext(Context);
useEffect(()=>{
const {ThrowErroEmail, ThrowErroPassword, password, email}=state;
if (!(ThrowErroEmail || ThrowErroPassword)&&password&&email) {
  setReady(1);
}
else if ( ready !== 0 ){
  setReady(0);
}

},[state]);

   function SubmitForm(e) {
   
  if (ready) {
   emailDataLogin(state.email,state.password)
   .then(response=>{
    const data = response.data;
    if (data.code === 0) {
      

      if( data.msg.toLowerCase().search('sai') !== -1){
        dispatch( {
          action:'ErroPassword', payload:response.data.msg, })
      } else {
        dispatch( {
          action:'ErroEmail', payload:response.data.msg, })
      }
   } else {
    localStorage.setItem('user_token',response.data.user.user_token);
    setPopUpLogSuccess(1);
    RedirectWeb()
    }
   }) ;
    }  else {
  e.preventDefault();
     }
   } 

    return <form className = 'formLogin'>
     {/* 'email' */}
     <div className = 'backgroundUseName'>
      <input value = {state.email} 
     onChange={(e)=>{
      let value=e.target.value;
      dispatch({
        action:'emailWrite',
        payload:value })}}
      className={'inputType ' + (state.ThrowErroEmail?'inputType--invalid':'')} type = 'text' placeholder = "Nhập chính xác email của bạn "
      />
       <p className = 'messageErroInput'>{state.ThrowErroEmail}</p>
   </div>

    {/* 'password' */}

         <div className = 'backgroundPassword'>
        
         <input value = {state.password} 
         type = {controll?'password':'text'}
     onChange = {(e)=>{
      let value = e.target.value;
      dispatch({
        action:'passwordWrite',
        payload:value })}}
      className = {'inputType ' + (state.ThrowErroPassword?'inputType--invalid':'')}  placeholder = "Tạo mật khẩu (dễ nhớ một chút nhé ^^)"
      />
       <p className = 'messageErroInput'>{state.ThrowErroPassword}</p>
  <HandelShow controllEl = {[controll,setControll]}/>
   </div>
        

      <button onClick={SubmitForm} type = 'button' className = {
  (ready?'submitButtonForm--good':' submitButtonForm--invalid')}>Đăng nhập</button>
    </form>
}
export default FormLogin;