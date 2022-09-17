//Thiết lập tên cookie, giá trị và ngày hết hạn
export const setCookie = (cookieName, cookieValue, day) => {
    const date = new Date();
    date.setDate(date.getDate() + day);
    let formatDatetoUTC = date.toUTCString().replace('GMT', 'UTC');
  
    document.cookie = `${cookieName}=${cookieValue}; expires=${formatDatetoUTC} ; path=/`;
};

//Lấy cookie theo tên
export const getCookie = (cookieName) => {
    let cookie = document.cookie;
    let arrCookie = cookie.split('; ');
    let cookieStr = arrCookie.find((item) => item.includes(cookieName));
    if (cookieStr === undefined) {
      return null;
    }
    let cookieValue = cookieStr.split('=')[1];
    return cookieValue;
};

//Xóa cookie
export const delete_cookie = (cookieName) => {
    document.cookie = cookieName +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};