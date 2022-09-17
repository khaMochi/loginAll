//login success from email
import {setCookie} from '../../utils/cookies';
import redirectWeb from '../../component/redirectWeb';

function handelWhenSuccess(data, reducer) {
    //reducer handel popup
    const [popUp, setPopUp] = reducer;
    setPopUp({type: 'successLogin'});
    setCookie('user_token', data.data.user["user_token"], 7);
    redirectWeb();
}

export default handelWhenSuccess;