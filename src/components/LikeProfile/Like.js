import React from 'react';
import styles from './Like.module.css'
import { CATEGORIES } from '../../data/categories';


export default function Like() {
    return (
        <div className={styles.main}>
            <h2 style={{textAlign:"center"}}>لیست علاقه مندی </h2>
            <div className={styles.wrapper}>
                {CATEGORIES.category1.data.map((item, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.poster}><img src={item.imageUrl} alt={item.title} /></div>
                        <div className={styles.details}>
                            <h1>{item.title}</h1>
                            <div className={styles.rating}>
                            </div>
                     
                            <p className={styles.desc}>{item.description}</p>
                            <p>{item.fee} ریال</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
