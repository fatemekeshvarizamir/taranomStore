import React from 'react';
import styles from './luginBtn.module.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useCart } from '../../Like/CartContext';  // Update path to CartContext
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Correct import for the user icon

let data = [
  { id: 0, name: "ورود/ثبت نام" }
];

export default function Btnlogin() {
  const { getTotalQuantity } = useCart();  // Use useCart hook to access context
  const totalQuantity = getTotalQuantity();  // Call getTotalQuantity to get total items in cart

  return (
    <div>
      <ul>
        <Link to={"/LoginForm"}>
          <li className={styles['li-custom']}>
          <span className={styles.icon3}><FontAwesomeIcon icon={faUser} style={{color: "#000000",}}/></span>   {/* Use the imported icon object */}
            <span className={styles.title3}>{data[0].name}</span>
          </li>
        </Link>
       
        <Link to={'/sabad'}>
          <div className={styles.cartContainer}>
            <ShoppingCartOutlined className={styles.cart3} />
            {totalQuantity > 0 && (
              <span className={styles.cartBadge}>{totalQuantity}</span>
            )}
          </div>
        </Link>
      </ul>
    </div>
  );
}
