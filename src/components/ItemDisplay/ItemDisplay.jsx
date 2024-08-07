import React, { useContext } from 'react'
import './ItemDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'

const ItemDisplay = ({ category }) => {
  // Retrieve the list of food items from the context
  const { food_list } = useContext(StoreContext);

  return (
    <div className="container-display">
      <div className="item-display" id="item-display">
        <h2>Items Available</h2>
        <div className="item-display-list">
          {food_list
            .filter(item => category === "All" || category === item.category) // Filter items based on the category
            .map((item, index) => (
              <ProductItem
                key={item._id} // Using item._id as the unique key
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                web = {item.web}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ItemDisplay
