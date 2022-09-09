import NavigateAccout from '../componentsLog/NavigateAcc'
import RegisterPageOne from './RegisterPageOne';
import {useState} from 'react';
import RegisterEmail from './RegisterEmail';
function RegisterMenu(){
 const [pageCurrent,setPageCurrent]=useState(1);
 const propForPage={setPageCurrent};

   return (<>
{pageCurrent == 1?
<RegisterPageOne {...propForPage}/>:
<RegisterEmail {...propForPage}/>}
    <NavigateAccout check='register'/>
    </>
   )
 }

export default RegisterMenu;