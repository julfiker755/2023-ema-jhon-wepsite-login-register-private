

const Button = ({children,handleclick,style}) => {
    return (
        <button
        className={`w-[150px] py-2 rounded-md bg-[red] text-white ${style}`}
        onClick={handleclick}
        >{children}</button>
    );
};

export default Button;