
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import {link,pathname} from '../App'
function changeUrl(){
  window.history.pushState('', '', `${window.location.pathname}?redirect=${link}&pathname=${pathname}`);
}

function NavigateAccout({check}) {
   useEffect(()=>{
    return changeUrl()
   },[])
  if (check == 'login') {
  return <div className = 'changeForm'>
  <b>Chưa có tài khoản?</b>
  <Link to = '/register' >Tạo tài khoản học ngay</Link></div>
                       }
  else  {
    return <div className='changeForm'>
    <b>Bạn đã có tài khoản rồi?</b>
    <Link to = '/login' >Đăng nhập ngay</Link></div>
    
       }
  }
  export default NavigateAccout;