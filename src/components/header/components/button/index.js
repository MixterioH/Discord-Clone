import './style.css'

const Button = (props) => {
    return (
        <div className='button' style={{
            backgroundColor: props.button.background,
            color: props.button.textColor,
            padding: props.button.padding,
        }}>
            <span className='button_text' style={{
                fontSize: props.button.fontSize
            }}>{props.children}</span>
        </div>
    )
}


export default Button