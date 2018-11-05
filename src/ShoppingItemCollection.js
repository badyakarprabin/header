import React from 'react';

import './App.css';
import ShoppingItem from './ShoppingItem';

class ShoppingItemCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myCollection: []
    };
  }

  componentWillMount() {
    const myItems = [
      {
        name: 'Long jeans',
        price: '$100',
        listDate: '12th March'
      },
      {
        name: 'Short jeans',
        price: '$50',
        listDate: '18th March',
        discount: true
      },
      {
        name: 'Ladies jeans',
        price: '$160',
        listDate: '11th March'
      },
      {
        name: 'Men jeans',
        price: '$20',
        listDate: '18th May'
      }
    ];
    this.setState({
      myCollection: myItems
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <span>
        {this.state.myCollection.map(item => (
          <ShoppingItem
            name={item.name}
            listedPrice={item.price}
            listedDate={item.listDate}
            hasDiscount={item.discount}
          />
        ))}
      </span>
    );
  }
}

export default ShoppingItemCollection;