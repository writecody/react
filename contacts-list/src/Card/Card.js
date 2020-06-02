import React from 'react';
import '../Card/Card.css';
import { FaAddressCard, FaEnvelope } from 'react-icons/fa';
import Linkify from 'react-linkify';

const Card = ({ contacts }) => {

  const lowerCaseEmailAddress = (emailAddress) => {
    return emailAddress.toLowerCase();
  }

  return (
    <div className="card-container">
      { 
        contacts.map((contact, index) => (
          contact && contact.name != null ? (
            <div className="card" key={index}>
              <div className="card-body">
                <div className="title-line">
                  <h2 className="card-title">{contact.name}
                  </h2>
                  <FaAddressCard className="address-card-icon" />
                </div>
                <h3 className="card-subtitle">
                  <FaEnvelope className="envelope-icon"/> 
                  <Linkify>{lowerCaseEmailAddress(contact.email)}</Linkify>
                </h3>
            </div>
              <p className="company-name">
                {contact.company.name}
              </p>
            </div>
          ) : null
        ))
      };  
  </div>
  );
}

export default Card;