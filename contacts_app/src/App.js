import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  const [editingContact, setEditingContact] = useState(null);

  return (
    <Provider store={store}>
      <Container>
        <h1>Lista de Contatos</h1>
        <ContactForm
          initialData={editingContact}
          onSave={() => setEditingContact(null)}
        />
        <ContactList onEdit={setEditingContact} />
      </Container>
    </Provider>
  );
};

export default App;