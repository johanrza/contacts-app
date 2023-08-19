import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {/* <ContactItem imageUrl={imageUrl} name={name} tag={tag} /> */}

      {/* use loop */}
      {
        contacts.map((contact) => (
          <ContactItem key={contact.id} {...contact} />
        ))
      }
    </div>
  );
}

export default ContactList;
