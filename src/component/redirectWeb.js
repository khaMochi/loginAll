import {redirect} from '../App';

function RedirectWeb() {
    setTimeout(() => {
        window.location.href = redirect;
        console.log(redirect);
    }, 500);
}

export default RedirectWeb;