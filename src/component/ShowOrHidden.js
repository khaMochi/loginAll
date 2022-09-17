function ShowOrHidden({controll}) {
    const [controllInput, setControllInput] = controll;
    //controll sẽ nhận state để set type cho input
    let text;
    if (controllInput) {
        text = 'Hiển thị';
    } else {
        text = 'Ẩn';
    }

    return (
        <button
            onClick={() => {
                setControllInput(pre => !pre)
            }}
            className='showORhidden' type='button'>
            {text}
        </button>
    )
}

export default ShowOrHidden;
