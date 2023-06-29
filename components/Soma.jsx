export function Soma(props) {
    var equals = parseInt(props.n1) + parseInt(props.n2);
    return (
        <div>
            <p>{equals}</p>
        </div>
    );
}