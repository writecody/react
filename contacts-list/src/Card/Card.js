import React from 'react';
import '../Card/Card.css';

const Card = ({ contacts }) => {
  return (
    <div>
      <h1 class="list-title">Contact List</h1>
      {contacts.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{contact.name}</h5>
            <h6 class="card-subtitle">{contact.email}</h6>
            <p class="card-text">{contact.company.catchPhrase}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Card;