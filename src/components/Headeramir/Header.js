import React from 'react';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'; 
import styles from './Header.module.css';
import Logo from '../../assets/img/Taranom Logo (10) (2).png';

import Sociall from '../social media/social';

export default function Headerr() {
  return (
    <div className={styles.header}>
      <img src={Logo} className={styles.logo} alt="Company Logo" />
      <div className={styles.sosial}><Sociall/></div>
      <div className={styles.userInfo}>
        <span className={styles.userName}>امیر محمد پیکانی</span>
        <Link className={styles.Link}>
          <UserOutlined className={styles.userIcon1} />
        </Link>
        <Link className={styles.Link}>
          <ShoppingCartOutlined className={styles.userIcon} />
        </Link>
      </div>
    </div>
  )
}
