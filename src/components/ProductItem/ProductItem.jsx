import React, { useContext } from 'react';
import './ProductItem.css';  // Importing CSS for styling the product item
import { assets } from '../../assets/assets/assets';  // Importing assets (icons) for cart actions
import { StoreContext } from '../../context/StoreContext';  // Importing context for cart state management

// ProductItem component
const ProductItem = ({ id, name, price, description, image }) => {
  // Extract cartItems, addToCart, and removeFromCart from StoreContext
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="product-item">
      {/* Container for product image and cart actions */}
      <div className="prod-item-img-cont">
        {/* Product image */}
        <img className="prod-item-img" src={image} alt={name} />

        {/* Conditional rendering based on whether the item is in the cart */}
        { !cartItems[id] 
          ? (
            // Show "add to cart" icon if the item is not in the cart
            <img 
              className='cartadd' 
              onClick={() => addToCart(id)} 
              src={assets.add_icon_white} 
              alt="Add to cart" 
            />
          ) 
          : (
            // Show item count and options to remove or adjust quantity if the item is in the cart
            <div className='prod-item-counter'>
              <img 
                onClick={() => removeFromCart(id)} 
                src={assets.remove_icon_red} 
                alt="Remove from cart" 
              />
              <p>{cartItems[id]}</p>
              <img 
                onClick={() => addToCart(id)} 
                src={assets.add_icon_green} 
                alt="Add more" 
              />
            </div>
          )
        }
      </div>

      {/* Container for product information */}
      <div className="prod-info">
        {/* Product name */}
        <div className="prod-name">
          <p>{name}</p>
        </div>
        {/* Product description */}
        <p className="prod-item-desc">{description}</p>
        {/* Product price */}
        <p className="prod-item-price">${price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
