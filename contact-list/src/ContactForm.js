import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    addContact({ name, phone });
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button type="submit">Add Contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
