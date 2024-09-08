import React from 'react'
import Header from '../../Heder/heder'

import styles from './mainlayout.module.css'
import Footer from '../Footer/footer'
export default function MainLayout({ children }) {
  return (
    <div className={styles.main}>
      <div className={styles.heder}><Header/></div>
      <div className={styles.content}>
      <div >{children}</div>
      <Footer/>
      </div>
      
       
    </div>
  )
}
