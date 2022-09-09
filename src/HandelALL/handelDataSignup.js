import axios from 'axios';
import {ApiRegisterEmail} from '../API/apiTeam'
async function  handelDataSignup(data){
const display_name=data.username.trim();
const Body_data= {
    display_name,
    email:data.email.trim(),
    password:data.password,
    lang:'vn',
    trial_course:1,
};
const headers={
    DeviceType:4,
    PrivateKey:'M0ch1M0ch1_En_$ecret_k3y'
}
try{
const response = axios.post(ApiRegisterEmail,{...Body_data},{headers})
return response;
}
catch(err){
    return err;
}
}
export default handelDataSignup;