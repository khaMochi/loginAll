import {Routes, Route} from 'react-router-dom';
import RouteLogin from './routes/RouteLogin';
import RouteSignup from './routes/RotueSignup';
import NotFound from './routes/NotFound';
import {useReducer, createContext} from 'react';
import MessageForgot from './pages/LoginPage/Popup/MessageForgot';
import MessageSuccess from './pages/LoginPage/Popup/MessageSuccess';
import {getCookie} from './utils/cookies';
import redirectWeb from './component/redirectWeb'
import urlAccepted from './utils/url-accepted';

const urlParams = new URLSearchParams(window.location.search);
export const link = urlParams?.get('redirect');
export const redirect = link;
const referrer = document.referrer;
const initialPopup = {forgot: false, success: false};

function ReducerPopup(state, action) {
    switch (action.type) {
        case 'forgot': { //message forgot
            const change = (state.forgot);
            return {
                ...state,
                forgot: !change,
            }
        }
        case 'successLogin': {//message success login
            const change = (state.success);
            return {
                ...state,
                success: !change,
            }
        }
        default : {
            return state;
        }
    }
}

export const ContextIndex = createContext();

function App() {
    const [popup, dispatch] = useReducer(ReducerPopup, initialPopup);
    const dev = process.env.REACT_APP_DEV;
    let check;
    if (dev === "true") {
        check = true;
    } else {
        const item = urlAccepted.filter((web) => (web.domain === referrer) && (web.redirect === redirect));
        check = item.length === 1;
    }
    if (!check) {
        return <NotFound/>;
    } else if (getCookie('user_token')) {
        redirectWeb();
        return (
            <ContextIndex.Provider value={[popup, dispatch]}>
                <MessageSuccess/>
            </ContextIndex.Provider>
        )

    }


    return (
        <ContextIndex.Provider value={[popup, dispatch]}>
            {/* message area */}
            {popup.forgot ? <MessageForgot/> : ''}
            {popup.success ? <MessageSuccess/> : ''}
            {/* message area */}
            <div>
                <Routes>
                    <Route path='/login' element={<RouteLogin/>}/>
                    <Route path='/signup' element={<RouteSignup/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </div>
        </ContextIndex.Provider>
    );
}

export default App;
