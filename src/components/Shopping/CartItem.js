import { LineOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import 'boxicons'

function CartItem({ item, updateQuantity, removeItem }) {


  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <li className="item">
   
      <div className="preview">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="details" data-price={item.price}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <div className="inner_container">
        <div className="picker">
          <Link to={"#"} className="btn-quantity plus" onClick={handleIncrease}>
          <PlusOutlined/>
          </Link>
          <div className="quantity-text">
            <span >{item.quantity}</span> 
           <hr style={{width:"10px",margin:"10px"}}/>
           
            <span  style={{color:"#009FE3",direction:"rtl"}}>{item.price.toFixed(0)}ریال</span>
          </div>
          <Link  className="btn-quantity minus" onClick={handleDecrease}>
          <MinusOutlined />
          
          </Link>
          
        <Link   className="btn-remove" onClick={handleRemove} >
         <box-icon name='trash'></box-icon>
         </Link>

          
          <input type="hidden" className="quantity_field" name="quantity" data-price={item.price} value={item.quantity} />
        </div>
        
      </div>
      
    </li>
  );
}

export default CartItem;
