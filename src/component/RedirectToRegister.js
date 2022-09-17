import {Link} from 'react-router-dom';

function RedirectToRegister() {

    return (
        <div className='redirectRoute'>
            <div>Chưa có tài khoản?</div>
            <Link to='/signup'>Tạo tài khoản học ngay</Link>
        </div>
    )
}

export default RedirectToRegister;