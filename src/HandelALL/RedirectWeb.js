import {redirect} from '../App'
function RedirectWeb() {
   const user_token = localStorage.getItem('user_token');
    
    if (user_token) {
        setTimeout(() => {
            window.location.href=redirect+'?user_token='+user_token;
        }, 1500);
        return true;
    }
    else {
        return false;
    }
 }

export default RedirectWeb;