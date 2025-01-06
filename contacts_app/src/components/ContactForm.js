import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../features/contacts/contactsSlice';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactForm = ({ initialData = null, onSave }) => {
  const [contact, setContact] = useState(
    initialData || { id: null, name: '', email: '', phone: '' }
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.id) {
      dispatch(editContact(contact));
    } else {
      dispatch(addContact({ ...contact, id: Date.now() }));
    }
    onSave();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome Completo"
        value={contact.name}
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Telefone"
        value={contact.phone}
        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
      />
      <button type="submit">Salvar</button>
    </FormContainer>
  );
};

export default ContactForm;