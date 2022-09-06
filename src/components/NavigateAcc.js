
import {Link} from 'react-router-dom'
function NavigateAccout({check}){
   
  if(check=='login'){
  return <div className='changeForm'>
  <b>Chưa có tài khoản?</b>
  <Link to='/register'>Tạo tài khoản học ngay</Link></div>
  }
  else{
    return <div className='changeForm'>
    <b>bạn đã có tài khoản rồi?</b>
    <Link to='/login'>Đăng nhập ngay</Link></div>
    
  }
  }
  export default NavigateAccout;