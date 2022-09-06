import NavigateAccout from './NavigateAcc';
import {RenderMethodLogin,FormLogin} from './index';
import Mochimeow1 from '../assets/img/Mochimeow 1.png';

function LoginMenu(){

    return<><h1 className='header'>
<i className='fa-solid fa-xmark'></i>Đăng nhập</h1>
<h2 className='title-Mochi'>Đăng nhập tài khoản học Mochi Mochi</h2>
<RenderMethodLogin/>
<p className="hoacP">Hoặc</p>
<FormLogin/>
<p className="forgot">Quên mật khẩu?</p>

<NavigateAccout check='login'/>
<img className='Mochimeow1' src={Mochimeow1}/>
</> 
}
export default LoginMenu;