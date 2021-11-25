import ContactStyles from "../styles/Contact.module.css"
import Styles from "../styles/CommonStyles.module.css";
import Form from "./Form";
import Input from "./Input";
import Textarea from "./TextArea";
import Button from "./Button";
import { Whatsapp, LocationArrow,Mail } from "./Icons";
const Contact = () => {

    const contactArray= [
        {
            icon:<LocationArrow/>,
            info1:"University of Nigeria, Enugu Campus",
            info2:"",
            color:"blue"
        },
        {
            icon:<Mail/>,
            info1:"ajwriter.gmail.com",
            info2:"",
            color:"red"
        },
        {
            icon:<Whatsapp/>,
            info1:"+234 703 687 9759",
            info2:"",
            color:"green"
        },
        
    ]
    return ( 
        <>
                <div className={ContactStyles.container}>
        <div className={Styles.title}>
            <h2>Contact</h2>
            </div>
            <div className={ Styles.subtitle}>
            <p>Get In Touch </p>
            </div>
            <div className={ContactStyles.row}>
                <div  className={ContactStyles.form_col}>
                    <Form className={ContactStyles.form}>
                        <label> Subject</label>
                        <Input type="text" required/>
                        <label> Your name</label>
                        <Input type="name" required/>
                        <label> Your email here</label>
                        <Input type="email" required/>
                        <label> Drop a message</label>
                        <Textarea type="message" required className={ContactStyles.textarea}/>
                        <Button>Send Me</Button>
                    </Form>
                </div>

                <div className={ContactStyles.contacts}>
                    {contactArray.map(contact=>(
                            <div key={contact.info1}  className={ContactStyles.col}>
                            <div className={ContactStyles.icon}>
                                <span style={{color:contact.color}}>{contact.icon}</span>
                            </div>

                            <div className={ContactStyles.text}>
                               <p>{contact.info1}</p>
                               <p>{contact.info2}</p>
                            </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Contact;