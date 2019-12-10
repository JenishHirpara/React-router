import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

class Home extends Component{
  state = {
    products : [
      {
        name: 'Edifice Watch',
        cost: 5000,
        id: 'sdg23'
      },
      {
        name: 'Nike Shoes',
        cost: 15000,
        id: 'hgj76'
      },
      {
        name: 'Lenskart Lens',
        cost: 1200,
        id: 'ukj89'
      },
      {
        name: 'CalvinKlein Jeans',
        cost: 7500,
        id: 'klu50'
      },
    ]
  }
  render(){
    const {products} = this.state
    return(
      <div>
        <div className="style">
            Home Page 
        </div>
        <div>
        
        { products.map( product => ( 
          <ul className="center">
          <Link className="style2"  to={`/${product.id}/${product.cost}`}>
              <li className="size">{product.name}</li>
            </Link>
          </ul>
        ) )}
            
        </div>
      </div>
    );
  }
}

export default Home;
