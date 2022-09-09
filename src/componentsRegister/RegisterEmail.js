import imgMochi from '../assets/img/Mochi-meomeo2-01 1.png'
import {useState, useReducer, useContext} from 'react';
import Reducer from './ReducerRedisterEmail';
import FormInputOfEmailRegister from './FormInputOfEmailRegister';
import {Context} from '../App';
import RedirectWeb from '../HandelALL/RedirectWeb'
import handelDataSignup from '../HandelALL/handelDataSignup';
export const initial={
  username:'',
  email:'',
  password:'',
  ThrowErroUsername:'',
  ThrowErroEmail:'',
  ThrowErroPassword:'',
  ErroEmail:'',
  ErroPassword:'',
}



function RegisterEmail({setPageCurrent}){
 const [data, dispatch]=useReducer(Reducer, initial)
const [ready, setReady]=useState(0);
const {setPopUpLogRegister} = useContext(Context);

  function SubmitForm(e) {
   
    if (ready) {
     handelDataSignup(data)
     .then(response => {
     if (response.data.code == 0) {
   dispatch( {
    action:'ErroEmail', payload:'Email mà bạn nhập đã tồn tại', })
      } else {
      localStorage.setItem('user_token', response.data.user.user_token);
      setPopUpLogRegister(1);
      RedirectWeb();
        }
      } )  
  }
  else {  e.preventDefault(); }
                                   }  
  return (
    <>
      <h1 className = 'header'>
      <i onClick = {e=>setPageCurrent(1)} className="fa-solid fa-angle-left"></i>Tạo tài khoản mới</h1>
        <h2 className='title-Mochi title-Mochi--register'>Cùng tạo 1 tài khoản mochi nào</h2>
  <img className = 'imgRegister' src={imgMochi} />
        <div className='registerMethod'>
<form className = 'formRegister'>
<FormInputOfEmailRegister Ready={[ready, setReady]} reducer = {[data, dispatch]}/>

      <button onClick = {()=>{SubmitForm()}} type = 'button' className = {
     (ready?'submitButtonForm--good':' submitButtonForm--invalid')}>Tạo tài khoản</button>
 </form>
         </div>
    </> )
}
export default RegisterEmail;