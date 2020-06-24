import React, {useState} from 'react';
import './header.css';

function Header () {

  const [pageTitle, setPageTitle] = useState('parts of the internet');

  return (
    <div className="header">
      <h1>{pageTitle}</h1>
      <input
        type="text"
        value={pageTitle}
        onChange={event => setPageTitle(event.target.value)}
      >
      </input>
    </div>
  )
} 

export default Header;