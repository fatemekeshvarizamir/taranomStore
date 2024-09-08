import React from 'react'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'
import Sociall from '../../social media/social'
export default function Footer() {
  return (
    <div className={styles.Footer}>
      
       <div className={styles.FoSection1}><Sociall/></div>
       <div className={styles.FoSection2}><h4 style={{paddingRight:"2%" , color:"black" }}>طراحی و انتشار توسط گروه حنا </h4></div>
    </div>
  )
}
