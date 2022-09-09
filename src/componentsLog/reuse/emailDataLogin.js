import {ApiLoginEmail} from '../../API/apiTeam';
import axios from 'axios'
 function  emailDataLogin(email,password) {
    const headers = { DeviceType:4,
      PrivateKey:'M0ch1M0ch1_En_$ecret_k3y'}
      const Body_data = {
        email,
        password,
        
    }
 
    return axios.post(ApiLoginEmail, {...Body_data}, {headers});;;
 }
export default emailDataLogin;