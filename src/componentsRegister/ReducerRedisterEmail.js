import {email,password,username} from './validateFunciton'
const Email=email;
const Password=password;
const Username=username;


function HandelValidate(text,Check){
   
    const throwErro = eval(Check)(text);
    if(throwErro){return throwErro;}

    
    return '';
}

export default function Reducer(state,actionOfInput){
const {action,payload} = actionOfInput;
    switch(action){
  case 'usernameWrite':{
    const erro=HandelValidate(payload,'Username');

  return {
    ...state,
    username:payload,
    ThrowErroUsername:erro?erro:'',
  }
  }
  case 'emailWrite':{
    const erro=HandelValidate(payload,'Email');
    return {
        ...state,
        email:payload,
        ThrowErroEmail:erro?erro:'',
      }
  }
  case 'passwordWrite':{
    
    const erro=HandelValidate(payload,'Password');

    return {
        ...state,
        password:payload,
        ThrowErroPassword:erro?erro:'',

      }
  }
  
  case 'ErroEmail':{
    const erro=HandelValidate({ErroEmail:'true'},'Email');

    return {
      ...state,
      ThrowErroEmail:erro?erro:'',
    }
  }

 default :{
    return state;
 }
    }
}