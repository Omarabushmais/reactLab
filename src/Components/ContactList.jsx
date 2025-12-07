import ContactItem from "./ContactItem";

function ContactList(props) {
  const contacts = props.contacts;

  return (
    <div>
      <h2>Contacts</h2>
        {contacts.length === 0 ? (<p>No contacts available</p>): (
          <ul>
            {contacts.map((contact, index) =>(
              <ContactItem key= {index} contact={contact} index={index} deleteContact= {props.deleteContact}/>
            ))}
          </ul>
        )}
    </div>
  );
}

export default ContactList;