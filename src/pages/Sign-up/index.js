import React, {useState,useReducer,useEffect} from 'react';
import ReducerValidate from '../../component/validateInput/ReducerValidate'
import Mochi_Meomeo2 from "../../assets/image/Mochi_Meomeo2.png";
import {ButtonSignupGoogle, ButtonSignupFacebook} from "../../component/Button";
import redirectWeb from '../../component/redirectWeb';
import Back_Icon from "../../assets/image/back_icon.png";
import {ReactComponent as X_Icon} from "../../assets/image/svg/X_Icon.svg"
import {ApiRegister} from "../../api/UserApi";
import {setCookie} from '../../utils/cookies';
import './style_main.scss'
import ShowOrHidden from '../../component/ShowOrHidden';
const initalValiddate = {
    username: '',
    password: '',
    email: '',
    ErroEmail: '',
    ErroPassword: '',
    ThrowErroUsername:'',
    ThrowErroEmail: '',
    ThrowErroPassword: '',

}

const SignupPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [controllShow, setControllShow] = useState(1);//show or hidde text input
    const [ready, setReady] = useState(0);// xác nhận dữ liệu form hợp lệ 
    const [state, dispatch] = useReducer(ReducerValidate, initalValiddate);

    useEffect(() => {
        const {email, password, ThrowErroEmail, ThrowErroPassword, username, ThrowErroUsername} = state;
        if (!(ThrowErroEmail || ThrowErroPassword || ThrowErroUsername) && username && email && password) {
            //giải thích điều kiện nếu không có lỗi và  email,password đều có value
            setReady(1);
            // set nút button thành bấm được
        } else if (ready) {
            setReady(0);
            // set nút button thành ko bấm được

        }
    }, [state]);

    //Submit form
    const handleOnSubmit = (event) => {

    }
    
   
    return (
        <>
                <div className="sign-up__content ">
                    <div className="signup__header">
                        {showForm 
                            ? ( <button
                                    onClick={redirectWeb}
                                    className="signup__header__button">
                                        <img src={Back_Icon}/>
                                </button> )
                            : ( <button
                                    onClick={redirectWeb}
                                    className="signup__header__button">
                                       <X_Icon/>
                                </button> )
                                
                            } 
                        <h1 className="signup__header__title">Tạo tài khoản mới</h1>
                    </div>
                    {
                        showForm ? (
                            <>   
                                
                                <h3 className="sign-up__content__title title-form">Cùng tạo tài khoản Mochi nào</h3>
                                <img src={Mochi_Meomeo2} alt="image_mochi_meomeo2" className="sign-up__image"/>
                                <form className="sign-up__form" >
                                    <div className=' inputSignup'>
                                            <input
                                                value={state.username}
                                                className={'inputType ' + (state.ThrowErroUsername ? 'inputType--invalid' : '')}
                                                type='text'
                                                placeholder={'Tên của bạn'}
                                                onChange={(e) => dispatch({type: 'usernameWrite', payload: e.target.value})}
                                            />
                                            <p className='form__throw_erro'>{state.ThrowErroUsername}</p>
                                    </div>
                                    <div className=' inputSignup'>
                                            <input
                                                value={state.email}
                                                className={'inputType ' + (state.ThrowErroEmail ? 'inputType--invalid' : '')}
                                                type='text'
                                                placeholder={'Nhập chính xác email của bạn'}
                                                onChange={(e) => dispatch({type: 'emailWrite', payload: e.target.value})}
                                            />
                                            <p className='form__throw_erro'>{state.ThrowErroEmail}</p>
                                    </div>
                                    <div className=' inputSignup'>
                                            <input
                                                value={state.passwordWrite}
                                                className={'inputType ' + (state.ThrowErroPassword ? 'inputType--invalid' : '')}
                                                type={controllShow ? 'password' : 'text'}
                                                placeholder={'Nhập chính xác email của bạn'}
                                                onChange={(e) => dispatch({type: 'passwordWrite', payload: e.target.value})}
                                            />
                                            <p className='form__throw_erro'>{state.ThrowErroPassword}</p>
                                            <ShowOrHidden controll={[controllShow, setControllShow]}/>

                                    </div>
                                    <button
                                        className={'submitButtonForm ' + (ready ? 'submitButtonForm__good' : 'submitButtonForm__valid')}
                                        type='button' 
                                        onClick={handleOnSubmit}
                                    >
                                        Tạo tài khoản
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>
                                
                                <h3 className="sign-up__content__title">Bạn muốn tạo tài khoản bằng cách nào nhỉ?</h3>
                                <img src={Mochi_Meomeo2} alt="image_mochi_meomeo2" className="sign-up__image"/>
                                <ButtonSignupFacebook/>
                                <ButtonSignupGoogle/>
                                <h1>HOẶC</h1>
                                <button
                                    className="sign-up__button--show-form"
                                    onClick={() => setShowForm(true)}
                                >
                                    Tự tạo tài khoản với email
                                </button>
                            </>
                        )
                    }
                    <div className="sign-up--redirect">
                        Bạn đã có tài khoản?<a href="/login">Đăng nhập ngay</a>
                    </div>
                </div>
           
        </>
    )
}

export default SignupPage