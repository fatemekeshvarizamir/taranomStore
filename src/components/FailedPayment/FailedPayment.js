import React from 'react'
import styles from './FailedPayment.module.css'

export default function FailedPayment() {
  let data=[
    {id:0,name:"vector Sucsesful" ,img:require('../../assets/img/Screenshot 2024-05-08 173950.png')},
    {id:1,name:"vector Sucsesful" ,img:require('../../assets/img/Multiple.png')},
    {id:2,name:"شماره‌ی پیگیری:7854200"}
  ]

  return (
    <div className={styles.Main}>
      <div className={styles.div1}>
       <div className={styles.mainh2}>
        <img className={styles.Tik} src={data[1].img}/>
        <div className={styles.divTEXT}>
          <h2>پرداخت شما  </h2>
          <h2 className={styles.TextD1}>ناموفق</h2>
          <h2> بود  </h2>
         
        
          </div>
          <h3 className={styles.peygiri}>{data[2].name}</h3>
          <button className={styles.btnSucssesful}>برگشت به سایت</button>
       
       </div> 
       
      
      </div>
    
      <div className={styles.div2}>
        <img className={styles.imgVector} src={data[0].img}/>
      </div>
    </div>
  )
}
