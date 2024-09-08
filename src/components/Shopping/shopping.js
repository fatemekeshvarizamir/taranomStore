import React, { useState } from 'react';
import './Shopping.css';
import CartItem from '../Shopping/CartItem';
import { Link } from 'react-router-dom';

function Shopp1() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'کیک 1  ',
      price: 751.000 ,
      quantity: 1,
      image: 'https://assets.cookfood.net/product_916_2793.jpg',
      description: 'این یک متن تست است'
      
    },
    {
      id: 2,
      name: 'کیک 2',
      price: 2.49,
      quantity: 1,
      image: 'https://assets.cookfood.net/product_811.jpg',
      description: 'این یک متن تست 2است'
    },
    {
      id: 3,
      name: 'استند 401',
      price: 8.50,
      quantity: 1,
      image: 'https://assets.cookfood.net/product_1504.jpg',
      description: 'این یک متن تست 3 است'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const total = (subtotal * 1.2);
    return total;
  };

  return (
    <div className="container">
      <div className="header">
        <div className="login"><a href="#">Login</a></div>
        <div className="logo">
          <img src="https://www.cookfood.net/Content/images/Logo-full-black.png" alt="Logo" />
        </div>
        <div className="basket">
          <a href="#"><img src="https://www.cookfood.net/Content/images/basket2.png" alt="Basket" /></a>
        </div>
      </div>
      <div className="cart">
        <h1 className='Titlecart'>سبد خرید</h1>
        <div className="items">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
        </div>
        <div className="summary">
          <div className="summary-content">
            <div className="meta-data">
              <div className="sub-total" >
               
                <span className="amount">کل  : {calculateSubtotal()} ریال</span>
              </div>
              <div className="taxes">
              <span className="amount"> هزینه پست : </span> <span style={{direction:"rtl"}}>  35.000 ریال</span>
              </div>
            </div>
            <div className="total">
              <span className="amount"> جمع کل{calculateTotal()}</span>
            </div>
          </div>
          <div className="btn-summary">
            <span to={"#"} className="btn-checkout btn-reverse">برگشت به فروشگاه</span>
            <span to={"$"} className="btn-checkout">پرداخت</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopp1;
