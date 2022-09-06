import {signInWithPopup} from 'firebase/auth'
import {auth,providerFacebook} from '../firebase/Authentication'

 async function signWithFacebook(){
try{
    let data=await signInWithPopup(auth,providerFacebook);
console.log(data);
}
catch(err){
    console.log('erro');

}
}
function Facebook(){
    return <button onClick={signWithFacebook} className='buttonMethod--facebook'>
        <i className="fa-brands fa-facebook-f"></i>
        Đăng nhập với facebook</button>
}
export default Facebook;