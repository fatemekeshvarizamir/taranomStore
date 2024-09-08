import React, { useState } from 'react';
import styles from './History.module.css'

import Phone from '../../assets/img/iphone15-pro-64.webp';
import Tshirt from '../../assets/img/tshirt.webp';
import Pants from '../../assets/img/pants.webp';
import socks from '../../assets/img/socks.jpg'
import hatt from '../../assets/img/hatt.jpg'
import coat from '../../assets/img/coat.jpg'

const OrderHistory = () => {
  const [orders, setOrders] = useState([
    {
      id: 1456877455,
      date: '24 آوریل 2024',
      time: '12:07:24',
      total: 50500,
      status: 'تحویل داده شده',
      items: [
        { id: 101, name: 'iphone 13',  image: Phone },
        { id: 102, name: 'تیشرت',  image: Tshirt }
      ]
    },
    {
      id: 23456778,
      date: '20 آوریل 2024',
      time: '12:07:24',
      total: 300000,
      status: 'در انتظار',
      items: [
        { id: 103, name: 'شلوار', image: Pants },
        { id: 104, name: ' جوراب',  image: socks }
      ]
    },
    {
        id: 3567457345,
        date: '20 آوریل 2024',
        time: '12:07:24',
        total: 89000,
        status: 'لغو شده',
        items: [
          { id: 105, name: 'کلاه',  image: hatt },
          { id: 106, name: ' کت',  image: coat }
        ]
      },
  ]);

  return (
    <div className={styles.orderhistory}>
      <h2 style={{textAlign:"center"}}>تاریخچه سفارشات</h2>
      {orders.length === 0 ? (
        <p>سفارشی یافت نشد.</p>
      ) : (
        <div>
          {orders.map(order => (
            <div key={order.id} className={styles.order}>
              <div className={styles.invoice}>
                <p className={styles.status} style={{ color: 
                    order.status === 'تحویل داده شده' ? 'green' : 
                    order.status === 'در انتظار' ? 'orange' : 'red',
                    textAlign:"right"
                }}>
                  {order.status}
                </p>
                {order.status === 'تحویل داده شده' }
                {order.status === 'در انتظار' }
                {order.status === 'لغو شده'}
                <p className={styles.pp}>
                </p>
              </div>
              <p >
                <strong style={{padding:"0px"}} className={styles.strong} >شناسه سفارش:{order.id}  </strong> 
                <strong className={styles.strong}> تاریخ:{order.date}  </strong> 
                <strong className={styles.strong}> زمان:{order.time}  </strong> 
                <strong className={styles.strong}> مجموع:{order.total} تومان </strong> 
                <br/><hr className={styles.br}/>
              </p>
              <div className={styles.orderitem}>
                {order.items.map(item => (
                  <div key={item.id} className={styles.item}>
                    <img src={item.image} alt={item.name} />
                    <p className={styles.productname}>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
