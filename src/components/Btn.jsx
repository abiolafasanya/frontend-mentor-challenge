
const Btn = (props) => {
    return (
        <button className={`${btnStyle} ${props.className}`}>{props.name}</button>
    );
}

const btnStyle = `rouonded text-gray-500 py-2 px-4 hover:border-black hover:text-black font-semibold`;
export default Btn;
