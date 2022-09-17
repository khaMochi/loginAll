//   validate

var email = (text) => {
    if (text?.ErroEmail) {
        return '* ' + text.ErroEmail;
    }
// Mô tả trường hợp đặc biệt (email đã đăng ký / email đã tồn tại)
    text.trim();
    if (!(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(text)) && text.length !== 0) {
        return '* Email sai định dạng, bạn kiểm tra lại nhé';
    }

    return '';
}
var password = (text) => {
// Mô tả trường hợp đặc biệt (mật khẩu không chính xác / mật khẩu phải giống nhau)

    if (text?.ErroPassword) {
        return '* ' + text.ErroPassword;
    }

    if (text.length < 6 && text.length > 0) {
        return '* Mật khẩu tối thiểu 6 ký tự';
    }

    return '';
}
var username = (text) => {
    text.trim();
    if (/[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(text)) {
        return '* Tên không được chứa ký tự đặc biệt';
    } else if (text.length < 6 && text.length > 0) {
        return '* Tên tối thiểu 6 ký tự';
    } else if (text.length > 15) {
        return '* Tên dài tối đa 15 ký tự';
    }

    return '';
}


function ReducerValidate(state, action) {
    const {payload, type} = action;

    switch (type) {
        case 'usernameWrite': {
            const erro = username(payload);
            return {
                ...state,
                username: payload,
                ThrowErroUsername: erro
            }
        }
        case 'emailWrite': {
            const erro = email(payload);
            return {
                ...state,
                email: payload,
                ThrowErroEmail: erro
            }
        }
        case 'passwordWrite': {
            const erro = password(payload);
            return {
                ...state,
                password: payload,
                ThrowErroPassword: erro
            }
        }

        case 'ErroEmail': {
            const erro = email({ErroEmail: payload});
            return {
                ...state,
                ThrowErroEmail: erro
            }
        }
        case 'ErroPassword': {
            const erro = password({ErroPassword: payload});
            return {
                ...state,
                ThrowErroPassword: erro
            }
        }
        default : {
            console.log('ko hop le');
            return state;
        }
    }

}

export default ReducerValidate;
 