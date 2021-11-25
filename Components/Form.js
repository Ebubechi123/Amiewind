
import FormStyles from "../styles/Form.module.css"

const Form = ({children,onSubmit,className}) => {
    return ( 
        <>
        <form className={className} onSubmit={onSubmit} >
            {children}
        </form>
        </>
     );
}
 
export default Form;