import React from 'react'
import styles from './content.module.css'
import { CATEGORIES } from '../../data/categories';
import { useState } from 'react'

export default function Content() {



  const [selectedItem, setSelectedItem] = useState(CATEGORIES.category3.data[6]);


  return (
    <div className={styles.contentmain}>

      <div className={styles.div1}>

        <div className={`${styles.menu2} ${selectedItem.id === CATEGORIES.category1.data[5].id ? styles.clicked : ''}`} onClick={() => setSelectedItem(CATEGORIES.category1.data[5])}>
          <div className={styles.btntextM}>
            <h4>{CATEGORIES.category1.data[5].name}</h4>
            <h5>{CATEGORIES.category1.data[5].description}</h5>
          </div>
          <img src={CATEGORIES.category1.data[5].imageUrl} className={styles.img2} />
        </div>

        <div className={`${styles.menu6} ${selectedItem.id === CATEGORIES.category2.data[3].id ? styles.clicked : ''}`} onClick={() => setSelectedItem(CATEGORIES.category2.data[3])}>
          <div className={styles.btntextM}>
            <h4>{CATEGORIES.category2.data[3].name}</h4>
            <h5>{CATEGORIES.category2.data[3].description}</h5>
          </div>
          <img src={CATEGORIES.category2.data[3].imageUrl} className={styles.img2} />
        </div>
        


        <div className={`${styles.menu7} ${selectedItem.id === CATEGORIES.category3.data[7].id ? styles.clicked : ''}`} onClick={() => setSelectedItem(CATEGORIES.category3.data[7])}>
          <div className={styles.btntextM}>
            <h4>{CATEGORIES.category3.data[7].name}</h4>
            <h5>{CATEGORIES.category3.data[7].description}</h5>
          </div>
          <img src={CATEGORIES.category3.data[7].imageUrl} className={styles.img2} />
        </div>


        <div className={`${styles.menu8} ${selectedItem.id === CATEGORIES.category4.data[4].id ? styles.clicked : ''}`} onClick={() => setSelectedItem(CATEGORIES.category4.data[4])}>
          <div className={styles.btntextM}>
            <h4>{CATEGORIES.category4.data[4].name}</h4>
            <h5>{CATEGORIES.category4.data[4].description}</h5>
          </div>
          <img src={CATEGORIES.category4.data[4].imageUrl} className={styles.img2} />
        </div>


      </div>

      <div className={styles.maindiv2}>
        <img src={selectedItem.imageUrl} className={styles.Bimg} />
        <div className={styles.contentOverlay}>
          <div className={styles.TextV}>
            <h2>{selectedItem.name}</h2>

            <h4>{selectedItem.description}</h4>


          </div>

        </div>
      </div>
      <div className={styles.div3}>


        <div className={`${styles.menu1} ${selectedItem.id === CATEGORIES.category5.data[2].id ? styles.clicked : ''}`} onClick={() => setSelectedItem(CATEGORIES.category5.data[2])}>
          <img src={CATEGORIES.category5.data[2].imageUrl} className={styles.img1} />
          <div className={styles.btntextM}>
            <h4>{CATEGORIES.category5.data[2].name}</h4>
            <h5>{CATEGORIES.category5.data[2].description}</h5>
          </div>
        </div>


        <div className={`${styles.menu3} ${selectedItem.id === CATEGORIES.category6.data[7].id ? styles.clicked : ''}`} onClick={() => setSelectedItem(CATEGORIES.category6.data[7])}>
          <img src={CATEGORIES.category6.data[7].imageUrl} className={styles.img1} />
          <div className={styles.btntextM}>
            <h4>{CATEGORIES.category6.data[7].name}</h4>
            <h5>{CATEGORIES.category6.data[7].description}</h5>
          </div>
        </div>


        <div className={`${styles.menu4} ${selectedItem.id === CATEGORIES.category7.data[0].id ? styles.clicked : ''}`} onClick={() => setSelectedItem(CATEGORIES.category7.data[0])}>
          <img src={CATEGORIES.category7.data[0].imageUrl} className={styles.img1} />
          <div className={styles.btntextM}>
            <h4>{CATEGORIES.category7.data[0].name}</h4>
            <h5>{CATEGORIES.category7.data[0].description}</h5>
          </div>
        </div>


        <div className={`${styles.menu5} ${selectedItem.id === CATEGORIES.category8.data[1].id ? styles.clicked : ''}`} onClick={() => setSelectedItem(CATEGORIES.category8.data[1])}>
          <img src={CATEGORIES.category8.data[1].imageUrl} className={styles.img1} />
          <div className={styles.btntextM}>
            <h4>{CATEGORIES.category8.data[1].name}</h4>
            <h5>{CATEGORIES.category8.data[1].description}</h5>
          </div>
        </div>

      </div>

    </div>
  )
}