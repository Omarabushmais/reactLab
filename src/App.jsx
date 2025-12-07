import { useState } from 'react';
import './App.css'
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';


function App() {
  
  const [contacts, setContacts] = useState([]);

  function addContact(newContact){
    setContacts([...contacts, newContact]);
  }
  
  function deleteContact(idx){
    const newContacts = contacts.filter((_, index)=> index !== idx);
    setContacts(newContacts);
  }

  return (
      <div className="App">
          <h2>Contact Manager</h2>
          <ContactForm addContact={addContact} />
          <ContactList contacts={contacts} deleteContact={deleteContact}/>
      </div>
    
  );
}

export default App
