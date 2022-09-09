import img from '../assets/img/Mochi thong bao-01 1.png'
function RouteNotFound({text}){

    return (
    <>
    <div className='throwErroURL'>
    <img style={{marginTop:'40px',
       marginLeft:'44px'
           }} src={img}/>
    <h1 style={{margin:'40px  10px'}}>{text}</h1>
    </div>
    </>
    )
}
export default RouteNotFound;
