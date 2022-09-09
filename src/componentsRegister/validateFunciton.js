function email(text){
    if (text?.ErroEmail) { return '* '+text.ErroEmail; }

    text.trim();

    if (!(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(text))
    &&text.length != 0) {
    return '* Email sai định dạng, bạn kiểm tra lại nhé';
    }
    return ''
}
function password (text) {
    if (text?.ErroPassword) { return '* '+text.ErroPassword; }

    if (text.length<6&&text.length>0) {
    return '* Mật khẩu tối thiểu 6 ký tự';
    }

    return ''
}
function username(text) {
    text.trim();
    if ( /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(text) ) {
        return '* Tên không được chứa ký tự đặc biệt';
    }
    else if (text.length<6&&text.length>0) {
   return '* Tên tối thiểu 6 ký tự';
    }
    else if (text.length>15) {
   return '* Tên dài tối đa 15 ký tự';  }
    
        return ''
}

export {email, password, username};
