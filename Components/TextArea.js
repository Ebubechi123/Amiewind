const Textarea = ({
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
        <textarea style={style} type={type} name={name} id={id}  onChange={onChange} className={className} required={required} />
        </>
     );
}
 
export default Textarea;