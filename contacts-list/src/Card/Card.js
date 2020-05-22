import React from 'react';
import '../Card/Card.css';
import { FaAddressCard, FaEnvelope } from 'react-icons/fa';
import Linkify from 'react-linkify';

const Card = ({ contacts, quotes }) => {
  return (
    <div>
    <h1 class="list-title">Contact List</h1>
    { 
      contacts.map((contact) => (
        <div class="card">
          <div class="card-body">
            <div className="title-line">
              <h2 class="card-title">{contact.name}
              </h2>
              <FaAddressCard className="address-card-icon" />
            </div>
            <h3 class="card-subtitle">
              <FaEnvelope className="envelope-icon"/> 
              <Linkify>{contact.email}</Linkify>
            </h3>
            <p class="card-text">
              {"Favorite quote: "} 
                <span className="italic-text">{quotes.content}</span>
            </p>
          </div>
        </div>
      ))
    };
      </div>
      );
    };
    
    export default Card;