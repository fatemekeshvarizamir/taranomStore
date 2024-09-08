import React from 'react';
import styles from './heder.module.css';

import Social from '../social media/social';
import Btnlogin from '../BUTTONS/luginBtn/luginBtn';
import { Link } from 'react-router-dom';


export default function Heder() {
  let data = [
    { id: 0, img: require('../../assets/img/Taranom Logo (10) (2).png') }
  ]
  return (
    <div className={styles.main}>
      <div className={styles.divlogo}>
       <Link to="/">
       <img src={data[0].img} className={styles.logo} />
       </Link>
       </div>
      <div className={styles.heder}>
       <Btnlogin/>
       <Social/>
      </div>

    </div>
  )
}
