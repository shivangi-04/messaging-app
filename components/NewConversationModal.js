import React from 'react';
import { Modal, Form, Button, FormGroup } from 'react-bootstrap'
import {usecontacts} from '../contexts/ContactsProvider'
import { useConversations } from '../contexts/ConversationProvider'


export default function NewConversationModal(closeModal) {
  const [selectedContactIds, setSelectedContactIds] = useState([])
  const {contacts} = useContacts()
  const { createConversation } = useConversations()

function handleSubmit(e)
{
  e.preventDefault()

  createConversation(selectedContactIds)
  closeModal()
}  

function handleCheckboxChange(contactId) {
  setSelectedContactIds(prevSelectedContactIds => {
    if(prevSelectedContactIds.includes(contactId)){
      return prevSelectedContactIds.filter(prevId =>{
        return contactId !== prevId
      })
    }
  })
}



  return( <>
  <Modal.Header closeButton> Create Conversation </Modal.Header>
  <Modal.Body>
      <Form onSubmit = {handleSubmit}>
          {contacts.map(contact =>(
<FormGroup controlId={contact.id} key={contact.id}>
  <Form.Check 
  type="checkbox"
  value={selectedContactIds.includes(contacts.id)}
  label={contacts.name}
  onChange ={() => handleCheckboxChange(contact.id)}
  />
</FormGroup>
          ))}
          <Button type="submit"> Create </Button>
      </Form>
  </Modal.Body>
  </>
)
}
