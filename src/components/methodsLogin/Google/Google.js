import {signInWithPopup} from 'firebase/auth'
import {auth,providerGoogle} from '../firebase/Authentication'
const signInWithGoogle=async ()=>{
   try{
  let data=  await signInWithPopup(auth,providerGoogle);
    console.log(data);
   }
   catch(err){
    console.log('faile');

   }
}
function Google(){

    return <button className='buttonMethod--google' onClick={signInWithGoogle}> 
   <i className="fa-brands fa-google-plus-g"></i> Đăng nhập với
   <i className="fa-brands fa-google-plus-g"></i></button>
}
export default Google;