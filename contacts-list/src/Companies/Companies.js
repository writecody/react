import React from 'react';
import '../Companies/Companies.css';
import Linkify from 'react-linkify';

const Companies = ({ companies }) => {
  
  return (
    <>
      <h2 className="companies-header">Companies</h2>
      <ul>
        {
          companies.map((company, index) => (
            company && company.properties != null && company.properties.homepage_url != null ? (
              <li key={index}>
                <Linkify>{company.properties.homepage_url}
                </Linkify>
              </li>
              ) : null
            ))
        }
      </ul>
    
    </>
  )
}

export default Companies;
