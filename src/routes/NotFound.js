import imgMochi from '../assets/image/Mochi thong bao-01 1.png'

export default function NotFound() {

    return (
        <>
            <div className='throwErroURL'>
                <img
                    style={{marginTop: '40px', marginLeft: '44px'}}
                    src={imgMochi}/>
                <h1 style={{margin: '40px  10px'}}>Vui lòng kiểm tra đường dẫn của bạn</h1>
            </div>
        </>
    )
} 