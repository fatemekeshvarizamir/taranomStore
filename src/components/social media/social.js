import React from 'react'
import styles from './social.module.css'
import { FacebookOutlined, InstagramOutlined, SendOutlined, WhatsAppOutlined } from '@ant-design/icons'
import 'boxicons';
export default function Sociall() {
  return (
    <div className={styles.wrapper1}>
      <div className={styles.button1}>
        <div className={styles.icon1}>
        <SendOutlined className={styles.i1}/>
        </div>
        <span className={styles.span1}>Telegram</span>
      </div>
      <div className={styles.button1}>
        <div className={styles.icon1}>
        <InstagramOutlined className={styles.i1}/>
        </div>
        <span className={styles.span1}>instagram</span>
      </div>
      <div className={styles.button1}>
        <div className={styles.icon1}>
        <WhatsAppOutlined className={styles.i1}/>
        </div>
        <span className={styles.span1}>whatsapp</span>
      </div>
    </div>
  )
}

