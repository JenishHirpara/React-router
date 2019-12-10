import React from 'react';
import './Nav.css';

const Description = ( {match} ) => {
    //console.log(match);
  return(
      <div>
          <h1 className="description">
              Welcome to this page , you have shown keen interest in our product with id : {match.params.id} .
              Its selling price is {match.params.cost} however feel free to login in to our website to get further discounts.
          </h1>
      </div>
  );
}

export default Description;