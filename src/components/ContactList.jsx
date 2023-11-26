import React from 'react';
import ContactItem from './ContactItem';

// parent ContactApp
function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {/* <ContactItem imageUrl={imageUrl} name={name} tag={tag} /> */}

      {/* use loop */}
      {/* punya child */}
      {contacts.map((contact) => (
        <ContactItem 
          key={contact.id} 
          id={contact.id} 
          onDelete={onDelete} 
          {...contact} 
        />
      ))}
    </div>
  );
}

export default ContactList;
