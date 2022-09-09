import NavigateAccout from './NavigateAcc';
import {RenderMethodLogin,FormLogin} from './index';
import Mochimeow1 from '../assets/img/Mochimeow 1.png';
import {link,pathname} from '../App'
import {useEffect} from 'react';
import {redirect} from '../App'
function LoginMenu({setForgotPass}){


    return(
    <>
        <h1 className='header'>
        <i className='fa-solid fa-xmark' onClick={()=>{window.location.href=redirect}}></i>Đăng nhập</h1>
        <h2 className='title-Mochi'>Đăng nhập để học ngay nhé</h2>
        <RenderMethodLogin/>
        <p className="hoacP">Hoặc</p>
        <FormLogin/>
        <p onClick={()=>{setForgotPass(1)}} className="forgot">Quên mật khẩu?</p>

        <NavigateAccout check='login'/>
        <img className='Mochimeow1' src={Mochimeow1}/>
    </> 
)
}
export default LoginMenu;