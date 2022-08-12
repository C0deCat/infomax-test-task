import './Message.css'

//props
//isError[bool] - whether its error message or not
//containerClasses[str] - contains classes' names for customization purposes
//message[str] - message text
function Message(props) {
    const classes = props.isError ? 'messageContainer_error ' : ''
    return ( 
        <div className={'messageContainer '.concat(classes, props.containerClasses)} >{props.message}</div>
     );
}

export default Message;