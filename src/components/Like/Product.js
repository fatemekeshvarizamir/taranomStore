import React, { useState } from 'react';
import { CATEGORIES } from '../../data/categories';
import { useCart } from '../../components/Like/CartContext';
import styles from './Product.module.css';
import BtnrangiProduct from '../BUTTONS/btnProdicts/btnproduct';

export default function ProductCart() {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        console.log("Adding to cart:", product); 
        setCart([...cart, product]);
      };

    return (
        <div>
            <div className={styles.headp}>
                {/* <Header /> */}
            </div>
            <div className={styles.filter}>
                <div className={styles.rightfilter}>
                    <p style={{fontWeight:'bold'}}>مرتب سازی :</p>
                    <p className={styles.pfilter}>پربازدیدترین</p>
                    <p className={styles.pfilter}>جدیدترین</p>
                    <p className={styles.pfilter}>پرسفارش ترین</p>
                    <p className={styles.pfilter}>ارزان‌ترین</p>
                    <p className={styles.pfilter}>گران‌ترین</p>
                </div>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.main}>
                <div className={styles.wrapper}>
                    {CATEGORIES.category1.data.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.poster}><img src={item.imageUrl} alt={item.title} /></div>
                            <div className={styles.details}>
                                <h1>{item.title}</h1>
                                <div className={styles.rating}>
                                    {/* <Rate disabled defaultValue={item.stars} /> */}
                                </div>
                                <div className={styles.tags}>
                                    {item.tags.map((tag, index) => (
                                        <span key={index} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <p className={styles.desc}>{item.description}</p>
                                <p>{item.fee} ریال</p>
                               
                               <BtnrangiProduct/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
