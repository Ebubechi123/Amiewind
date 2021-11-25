import ButtonStyles from "../styles/Button.module.css"


const Button = (
    {
        children,
        onClick,
        style,
        className,
    }
) => {
    return ( 
    <button onClick={onClick} className={className} style={style}>{children}</button>
     );
}
 
export default Button;