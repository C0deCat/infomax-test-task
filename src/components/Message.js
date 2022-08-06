import '../css/Message.css'

function Message(props) {
    const classes = props.isError ? 'messageContainer_error' : ''
    return ( 
        <div className={'messageContainer '.concat(classes)} >{props.message}</div>
     );
}

export default Message;