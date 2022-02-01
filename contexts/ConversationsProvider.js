import React,{useContext, useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from './ContactsProvider';
 
const ConversationsContext = React.createContext()

export function useConversations()
{
  return useContext(ContactsContext)
}

 export default function ConversationsProvider({id, children}) {
   const [conversations, setConversations] = useLocalStorage('conversations',[])
   const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
   const {contacts} = useContacts()

   function createConversation(recipients)
   {
     setConversations(prevConversations =>{
       return [...prevConversations,{recipients, messages: []}]
     })

   }

   function addMessageToConversation({recipients, text,sender}){
     setConversations(prevConversations => {
       let madeChange = false
       const newMessage = {sender, text}


       if(madeChange)
       {
         

       }
       else{
         return [...prevConversations, {recipients, messages: [newMessage]}]
       }
     })


   }

   function sendMessage(recipients, text)
   {
     addMessageToConversation({recipients, text, sender: id})
   }






const formattedConversations = conversations.map(conversations => {
    const recipients = conversation.recipients.map(recipient => {
        const contact = contacts.find(contact =>{
            return contact.id === recipient
        })
        const name= (contact && contact.name) || recipient
        return { id: recipient,name}
    })
    return { ...conversation, recipients}
})

const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations
    [selectedConversationIndex],
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    createConversation
}



   return (
       <ConversationsContext.Provider value={value}>
           {children}
       </ConversationsContext.Provider>
   )
 }
 