import React, {useState} from "react";
import { useRef } from "react";
import './form.css'
import emailjs from "emailjs-com";

const Form = ()=>{

    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");
    const [notification,setNotification]=useState(null);

    const formData = useRef();

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(formData.current)
        emailjs.sendForm('service_rj8v5sh', 'template_oaze0va', formData.current, 'fqy4zKvmcOZmd0Diq')
        .then((result) => {
            setNotification("Message Sent");
            setTimeout(()=>{
                setNotification(null)
            },5000)
            
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setEnteredName("");
        setEnteredEmail("");
        setEnteredMessage("");
    }
    return(
        <form ref={formData} className="form" onSubmit={submitHandler}>
            <div className="notification">{notification}</div>
            <div className="form__input">
                <input type="text" placeholder="Your Name" value={enteredName} onChange={e=>
                setEnteredName(e.target.value)} name="name" required/>
            </div>
            <div className="form__input">
                <input type="email" placeholder="Your Email" value={enteredEmail} onChange={e=>
                setEnteredEmail(e.target.value)} name="email" required/>
            </div>
            <div className="form__input">
                <textarea rows='10' placeholder="Write Message" value={enteredMessage} onChange={e=>
                setEnteredMessage(e.target.value)} name="message" required></textarea>
            </div>
            <button className="submit__btn" type="submit">
                Submit
            </button>
        </form>
    )
}

export default Form