import {ButtonLoginGoogle, ButtonLoginFacebook, ButtonLoginApple} from '../../component/Button'
import ShowOrHidden from '../../component/ShowOrHidden'
import {useState, useReducer, useEffect, useContext} from 'react';
import ReducerValidate from '../../component/validateInput/ReducerValidate';
import {ApiLogin} from '../../api/UserApi';
import {ReactComponent as X_Icon} from "../../assets/image/svg/X_Icon.svg"
import imageMochi from '../../assets/image/Mochimeow 1.png'
import RedirectToRegister from '../../component/RedirectToRegister';
import {ContextIndex} from '../../App'
import handelWhenSuccess from './handelWhenSuccess';
import redirectWeb from '../../component/redirectWeb'

const PLACEHOLDERPASS = 'Nhập chính xác mật khẩu của bạn';
const PLACEHOLDEREMAIL = 'Nhập email tài khoản học';
const initalValiddate = {
    username: '',
    password: '',
    email: '',
    ErroEmail: '',
    ErroPassword: '',
    ThrowErroEmail: '',
    ThrowErroPassword: '',

}


function LoginPage() {
    const [popup, setPopup] = useContext(ContextIndex);
    const [controllShow, setControllShow] = useState(1);//show or hidde text input
    const [ready, setReady] = useState(0);// xác nhận dữ liệu form hợp lệ 
    const [state, dispatch] = useReducer(ReducerValidate, initalValiddate);

    useEffect(() => {
        const {email, password, ThrowErroEmail, ThrowErroPassword} = state;
        if (!(ThrowErroEmail || ThrowErroPassword) && email && password) {
            //giải thích điều kiện nếu không có lỗi và  email,password đều có value
            setReady(1);
            // set nút button thành bấm được
        } else if (ready) {
            setReady(0);
            // set nút button thành ko bấm được

        }
    }, [state]);

    //submit
    function submitFormLogin(e) {
        if (ready) {
            const {email, password} = state;
            ApiLogin({email, password})
                .then(response => {
                    const {code, msg} = response.data; //lấy ra flag và message
                    if (code === 0) {
                        if (msg.includes('Email')) { // message trả vể e mail chưa đăng ký
                            dispatch({type: 'ErroEmail', payload: msg});
                        } else {                     //message trả vể mật khẩu sai
                            dispatch({type: 'ErroPassword', payload: msg});
                        }
                    } else {
                        handelWhenSuccess(response, [popup, setPopup]);
                    }
                })
        } else {
            e.preventDefault();
            // ngăn submit
        }

    }

    return (
        <>
            <section className='loginPage'>
                <div className="loginPage__header">
                    <button
                        onClick={redirectWeb}
                        className="loginPage__header__button">
                        <X_Icon/>
                    </button>
                    <h1 className="loginPage__header__title">Đăng nhập</h1>
                </div>
                <h3 className='loginPage--titleNote'>Đăng nhập tài khoản học MochiMochi</h3>
                <ButtonLoginGoogle/>
                <ButtonLoginFacebook/>
                <ButtonLoginApple/>
                <p className='hoac'>Hoặc</p>
                <form className='form-login-email'>
                    <div className='background--inputType form__input'>
                        <input
                            value={state.email}
                            className={'inputType ' + (state.ThrowErroEmail ? 'inputType--invalid' : '')}
                            type='text'
                            placeholder={PLACEHOLDEREMAIL}
                            onChange={(e) => dispatch({type: 'emailWrite', payload: e.target.value})}
                        />
                        <p className='form__throw_erro'>{state.ThrowErroEmail}</p>
                    </div>

                    <div className='background--inputType form__input'>
                        <input
                            value={state.password}
                            className={'inputType ' + (state.ThrowErroPassword ? 'inputType--invalid' : '')}
                            type={controllShow ? 'password' : 'text'}
                            placeholder={PLACEHOLDERPASS}
                            onChange={(e) => dispatch({type: 'passwordWrite', payload: e.target.value})}
                        />
                        <p className='form__throw_erro'>{state.ThrowErroPassword}</p>
                        <ShowOrHidden controll={[controllShow, setControllShow]}/>
                    </div>

                    <button
                        className={'submitButtonForm ' + (ready ? 'submitButtonForm__good' : 'submitButtonForm__valid')}
                        type='button' 
                        onClick={submitFormLogin}
                    >
                        Đăng nhập
                    </button>
                </form>

                <p
                    onClick={() => setPopup({type: 'forgot'})}
                    className="forgot">
                    Quên mật khẩu?
                </p>
                <RedirectToRegister/>
                <img src={imageMochi} className='mochiImage'/>
            </section>

        </>)
}

export default LoginPage;