import '../css/Label.css';

function Label(props) {
    return (
        <div className="labelBlock">
            <label className="labelBlock__label">{props.value}</label>
            {props.children}
        </div>
    );
}

export default Label;