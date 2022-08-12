import './Label.css';

//props
//value[str] - label caption
//children[JSX] - react and html component putted inside label block
function Label(props) {
    return (
        <div className="labelBlock">
            <label className="labelBlock__label">{props.value}</label>
            {props.children}
        </div>
    );
}

export default Label;