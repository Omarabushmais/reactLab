
function ContactItem(props){
    const {contact, index, deleteContact} = props;

    return(

        <li>
            {contact.username} - {contact.email}
            <button onClick={()=> deleteContact(index)}>Delete</button>
        </li>

    );


}
export default ContactItem;