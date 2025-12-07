import { useState } from "react";

function ContactForm(props){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");


     const handleSubmit = (e) => {
        e.preventDefault();

        const newContact ={
            username: username,
            email: email
        }

        props.addContact(newContact);

        setUsername("");
        setEmail("");

    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Contact</h2>
            <input type="text" placeholder="Enter Name" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <button type="submit"> Add contact</button>
        </form>
    );
    
}

export default ContactForm;
