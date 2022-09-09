import HandelShow from '../componentsLog/reuse/Show_Hidden-text'
import {useEffect, useState} from 'react'
function FormInputOfEmailRegister({Ready,reducer}){
 const [state,dispatch] = reducer;
 const [controll,setControll]=useState(1);
 const [ready,setReady]=Ready;
 useEffect(()=>{
  const {ThrowErroEmail, ThrowErroPassword, password, email}=state;
  if (!(ThrowErroEmail || ThrowErroPassword)&&password&&email) {
    setReady(1);
  }
  else if ( ready != 0 ){
    setReady(0);
  }
 },[state])
    return (
        <>
        {/* 'username' */}
        <div className='backgroundUseName'>
      <input value={state.username} 
      onKeyDown={(e)=>{
        if (e.key==' ') {
   let valueBefore=e.target.value;
           if(valueBefore[valueBefore.length-1]==' '){
            e.preventDefault();
           }}
      }}
     onChange={(e)=>{
      let value=e.target.value;
      dispatch({
        action:'usernameWrite',
        payload:value })}}
      className={'inputType ' + (state.ThrowErroUsername?'inputType--invalid':'')} type='text' placeholder="Tên của bạn"
      />
       <p className='messageErroInput'>{state.ThrowErroUsername}</p>
   </div>
        {/* 'email' */}
          <div className='backgroundUseName'>
      <input value={state.email} 
     onChange={(e)=>{
      let value=e.target.value;
      dispatch({
        action:'emailWrite',
        payload:value })}}
      className={'inputType ' + (state.ThrowErroEmail?'inputType--invalid':'')} type='text' placeholder="Nhập chính xác email của bạn "
      />
       <p className='messageErroInput'>{state.ThrowErroEmail}</p>
   </div>
   
   {/* 'password' */}

         <div className='backgroundPassword'>
        
         <input value={state.password} 
         type={controll?'password':'text'}
     onChange={(e)=>{
      let value=e.target.value;
      dispatch({
        action:'passwordWrite',
        payload:value })}}
      className={'inputType ' + (state.ThrowErroPassword?'inputType--invalid':'')}  placeholder="Tạo mật khẩu (dễ nhớ một chút nhé ^^)"
      />
       <p className='messageErroInput'>{state.ThrowErroPassword}</p>
  <HandelShow controllEl={[controll,setControll]}/>
   </div>
        
        
        </>
    )
}
export default FormInputOfEmailRegister