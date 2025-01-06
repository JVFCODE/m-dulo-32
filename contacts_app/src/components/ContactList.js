import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../features/contacts/contactsSlice';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContactList = ({ onEdit }) => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <ListContainer>
      {contacts.map((contact) => (
        <ContactCard key={contact.id}>
          <div>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </div>
          <div>
            <button onClick={() => onEdit(contact)}>Editar</button>
            <button onClick={() => dispatch(removeContact(contact.id))}>Remover</button>
          </div>
        </ContactCard>
      ))}
    </ListContainer>
  );
};

export default ContactList;