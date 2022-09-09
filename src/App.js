import { LoginMenu ,RegisterMenu,RouteNotFound,RedirectWeb,PopupLogSuccess,PopupRegister,ForgotPass} from './componentsLog/index';
import './App.css';
import './style/main.scss'
import {Routes,Route} from "react-router-dom"
import may from './assets/img/may.png'
import {useState,createContext,useEffect} from 'react';
export const Context = createContext();
const urlParams = new URLSearchParams(window.location.search);

export const link= urlParams?.get('redirect');
export const pathname=urlParams?.get('pathname');
 export const redirect=link+pathname;

const WebAccpet = ['http://localhost:3000'];

function App() {
  const [forgotPass, setForgotPass] = useState(0);
  const [popUpLogSuccess, setPopUpLogSuccess] = useState(0);
  const [popUpLogRegister, setPopUpLogRegister] = useState(0);
 const [accept,setAccept] = useState(0);
  useEffect(()=>{
   let check = WebAccpet.map((web)=>{
      if(link==web){
          setAccept(1);
          return true; }
 })
     if (check[0]) {
      if ( RedirectWeb() ) { setPopUpLogSuccess(1) }
     }
}
,[])

  if (!accept) {  return <RouteNotFound text='Vui lòng kiểm tra lại đường dẫn'/> }
  return (
 <Context.Provider value = {{setPopUpLogSuccess,setPopUpLogRegister}}>
    <div className="App backgroundSite">
      <img src = {may} className= 'may1'/>
      <img src = {may} className='may2'/>
      <img src = {may} className='may3'/>

      <div className='card'>
       <Routes>
          <Route path = '/login' element = {<LoginMenu setForgotPass= {setForgotPass} /> }/>
          <Route path = '/register' element = {<RegisterMenu/>}/>
          <Route path = '*' element = {<RouteNotFound text='Trang này hiện không tồn tại'/>}/>
         
       </Routes>
       </div>
       {forgotPass?<ForgotPass setForgotPass = {setForgotPass} />:''}
   {popUpLogSuccess?<PopupLogSuccess setPopUpLogSuccess= {setPopUpLogSuccess}/>:''}
    {popUpLogRegister?<PopupRegister/>:''}
    </div>
 </Context.Provider>
 
  );


}

export default App;

