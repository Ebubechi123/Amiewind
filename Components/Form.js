import ContactStyles from "../styles/Contact.module.css"
import FormStyles from "../styles/Form.module.css"
import Button from "./Button";
import Input from "./Input";
import Textarea from "./TextArea";

const Form = ({children,onSubmit,className}) => {
    return ( 
        <>
        <form className={className} onSubmit={onSubmit} >
        <label> Subject</label>
                        <Input type="text" required/>
                        <label> Your name</label>
                        <Input type="name" required/>
                        <label> Your email here</label>
                        <Input type="email" required/>
                        <label> Drop a message</label>
                        <Textarea type="message" required className={ContactStyles.textarea}/>
                        <Button>Send Me</Button>
        </form>
        
        </>
     );
}
 
export default Form;