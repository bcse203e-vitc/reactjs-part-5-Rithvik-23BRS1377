import React, { useState } from "react";

export default function ContactList() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Alice", phone: "123-456-7890" },
    { id: 2, name: "Bob", phone: "987-654-3210" },
  ]);

  return (
    <div>
      <h3>Contacts</h3>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
