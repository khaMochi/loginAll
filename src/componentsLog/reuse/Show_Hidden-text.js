function HandelShow({controllEl}){
    const [controll,setControll]=controllEl;
let text;
    if(controll){
text='Hiển thị'
    }
    else{
        text='Ẩn'
    }
    return <button  onClick={()=>{setControll(pre=>!pre)}} className='showORhidden' type='button'>{text}</button>
}
export default HandelShow;