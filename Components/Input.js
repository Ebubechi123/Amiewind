

const Input = ({
    type,
    name,
     id,
     className,
    onChange,
    required,
    style

}) => {
    return ( 
        <>
        <input style={style} type={type} name={name} id={id}  onChange={onChange} className={className} required={required} />
        </>
     );
}
 
export default Input;