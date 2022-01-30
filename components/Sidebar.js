import React from 'react';
import {Tab, Nav} from 'react-bootstrap'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY ='contacts'

export default function Sidebar( {id}) {
  return (
  <style= {width : '250px'} className="d-flex flex-column">
      <Tab.Container activeKey= {activeKey}>
          <Nav varaint ="tabs" className="justify-content-center">
              <Nav.Item>
                  <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
              </Nav.Item>
          </Nav>

      </Tab.Container>

  </div>
  )
}
