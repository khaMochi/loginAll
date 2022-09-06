import { LoginMenu ,RegisterMenu} from './components/index';
import './App.css';
import './style/main.scss'
import {Routes,Route} from "react-router-dom"
import may from './assets/img/may.png'
function App() {
  return (
    <div className="App backgroundSite">
      <img src={may} className='may1'/>
      <img src={may} className='may2'/>
      <img src={may} className='may3'/>

      <div className='card'>
       <Routes>
<Route path='/login' element={<LoginMenu/>}/>
<Route path='/register' element={<RegisterMenu/>}/>
       </Routes>
       </div>
    </div>
  );
}

export default App;

