import React, { useState, useEffect } from 'react';
import { useSprings, animated } from '@react-spring/web';
import styles from './content.module.css';
import { CATEGORIES } from '../../data/categories';
import { useNavigate } from 'react-router-dom';

export default function Testhom() {
  // const [selectedItem, setSelectedItem] = useState(CATEGORIES.category7.data[3]);
  const [selectedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();

  // تاخیرها برای هر منو
  const delays = [0, 300, 500, 700, 0, 300, 500, 700];

  // استفاده از useSprings برای انیمیشن زنجیره‌ای
  const [springs, api] = useSprings(8, index => ({
    transform: 'translateX(0%)',
    from: index < 4 ? { transform: 'translateX(-100%)' } : { transform: 'translateX(100%)' },
    config: { duration: 500 },
    delay: delays[index],
  }));

  // لیست منوها
  const menuItems = [
    CATEGORIES.category1.data[5],
    CATEGORIES.category2.data[3],
    CATEGORIES.category3.data[7],
    CATEGORIES.category4.data[4],
    CATEGORIES.category5.data[2],
    CATEGORIES.category6.data[7],
    CATEGORIES.category7.data[0],
    CATEGORIES.category8.data[1],
  ];

  // تابع برای تغییر منو به‌طور خودکار
  const changeItem = () => {
    setSelectedItem(prevItem => {
      const currentIndex = menuItems.findIndex(item => item.id === prevItem.id);
      const nextIndex = (currentIndex + 1) % menuItems.length;
      return menuItems[nextIndex];
    });
  };

  // استفاده از تایمر برای تغییر منو
  useEffect(() => {
    const intervalId = setInterval(changeItem, 4000);
    return () => clearInterval(intervalId); // پاکسازی تایمر هنگام انصراف
  }, [selectedItem]);

  const handleNavigate = (category) => {
    navigate(`/productpage/${category.id}`, { state: { category } });
  };

  return (
    <div className={styles.contentmain}>
      <div className={styles.div1}>
        <animated.div
          style={springs[0]}
          className={`${styles.menu2} ${selectedItem.id === CATEGORIES.category1.data[5].id ? styles.clicked : ''}`}
          onClick={() => {
            setSelectedItem(CATEGORIES.category1.data[5]);
            handleNavigate(CATEGORIES.category1);
          }}
        >
          <div className={styles.btntextM}>
            {/* <h4>{CATEGORIES.category1.data[5].name}</h4> */}
            <h5>{CATEGORIES.category1.data[5].description}</h5>
          </div>
          <img src={CATEGORIES.category1.data[5].imageUrl} className={styles.img2} alt={CATEGORIES.category1.data[5].name} />
        </animated.div>

        <animated.div
          style={springs[1]}
          className={`${styles.menu6} ${selectedItem.id === CATEGORIES.category2.data[3].id ? styles.clicked : ''}`}
          onClick={() => {
            setSelectedItem(CATEGORIES.category2.data[3]);
            handleNavigate(CATEGORIES.category2);
          }}
        >
          <div className={styles.btntextM}>
            {/* <h4>{CATEGORIES.category2.data[3].name}</h4> */}
            <h5>{CATEGORIES.category2.data[3].description}</h5>
          </div>
          <img src={CATEGORIES.category2.data[3].imageUrl} className={styles.img2} alt={CATEGORIES.category2.data[3].name} />
        </animated.div>

        <animated.div
          style={springs[2]}
          className={`${styles.menu7} ${selectedItem.id === CATEGORIES.category3.data[7].id ? styles.clicked : ''}`}
          onClick={() => {
            setSelectedItem(CATEGORIES.category3.data[7]);
            handleNavigate(CATEGORIES.category3);
          }}
        >
          <div className={styles.btntextM}>
            {/* <h4>{CATEGORIES.category3.data[7].name}</h4> */}
            <h5>{CATEGORIES.category3.data[7].description}</h5>
          </div>
          <img src={CATEGORIES.category3.data[7].imageUrl} className={styles.img2} alt={CATEGORIES.category3.data[7].name} />
        </animated.div>

        <animated.div
          style={springs[3]}
          className={`${styles.menu8} ${selectedItem.id === CATEGORIES.category4.data[4].id ? styles.clicked : ''}`}
          onClick={() => {
            setSelectedItem(CATEGORIES.category4.data[4]);
            handleNavigate(CATEGORIES.category4);
          }}
        >
          <div className={styles.btntextM}>
            {/* <h4>{CATEGORIES.category4.data[4].name}</h4> */}
            <h5>{CATEGORIES.category4.data[4].description}</h5>
          </div>
          <img src={CATEGORIES.category4.data[4].imageUrl} className={styles.img2} alt={CATEGORIES.category4.data[4].name} />
        </animated.div>
      </div>

      <div className={styles.maindiv2}>
        <img src={selectedItem.imageUrl} className={styles.Bimg} alt={selectedItem.name} />
        <div className={styles.contentOverlay}>
          <div className={styles.TextV}>
            <h2>{selectedItem.name}</h2>
            <h4>{selectedItem.description}</h4>
          </div>
        </div>
      </div>

      <div className={styles.div3}>
        <animated.div
          style={springs[4]}
          className={`${styles.menu1} ${selectedItem.id === CATEGORIES.category5.data[2].id ? styles.clicked : ''}`}
          onClick={() => {
            setSelectedItem(CATEGORIES.category5.data[2]);
            handleNavigate(CATEGORIES.category5);
          }}
        >
          <img src={CATEGORIES.category5.data[2].imageUrl} className={styles.img1} alt={CATEGORIES.category5.data[2].name} />
          <div className={styles.btntextM}>
            {/* <h4>{CATEGORIES.category5.data[2].name}</h4> */}
            <h5>{CATEGORIES.category5.data[2].description}</h5>
          </div>
        </animated.div>

        <animated.div
          style={springs[5]}
          className={`${styles.menu3} ${selectedItem.id === CATEGORIES.category6.data[7].id ? styles.clicked : ''}`}
          onClick={() => {
            setSelectedItem(CATEGORIES.category6.data[7]);
            handleNavigate(CATEGORIES.category6);
          }}
        >
          <img src={CATEGORIES.category6.data[7].imageUrl} className={styles.img1} alt={CATEGORIES.category6.data[7].name} />
          <div className={styles.btntextM}>
            {/* <h4>{CATEGORIES.category6.data[7].name}</h4> */}
            <h5>{CATEGORIES.category6.data[7].description}</h5>
          </div>
        </animated.div>

        <animated.div
          style={springs[6]}
          className={`${styles.menu4} ${selectedItem.id === CATEGORIES.category7.data[0].id ? styles.clicked : ''}`}
          onClick={() => {
            setSelectedItem(CATEGORIES.category7.data[0]);
            handleNavigate(CATEGORIES.category7);
          }}
        >
          <img src={CATEGORIES.category7.data[0].imageUrl} className={styles.img1} alt={CATEGORIES.category7.data[0].name} />
          <div className={styles.btntextM}>
            {/* <h4>{CATEGORIES.category7.data[0].name}</h4> */}
            <h5>{CATEGORIES.category7.data[0].description}</h5>
          </div>
        </animated.div>

        <animated.div
          style={springs[7]}
          className={`${styles.menu5} ${selectedItem.id === CATEGORIES.category8.data[1].id ? styles.clicked : ''}`}
          onClick={() => {
            setSelectedItem(CATEGORIES.category8.data[1]);
            handleNavigate(CATEGORIES.category8);
          }}
        >
          <img src={CATEGORIES.category8.data[1].imageUrl} className={styles.img1} alt={CATEGORIES.category8.data[1].name} />
          <div className={styles.btntextM}>
            {/* <h4>{CATEGORIES.category8.data[1].name}</h4> */}
            <h5>{CATEGORIES.category8.data[1].description}</h5>
          </div>
        </animated.div>
      </div>
    </div>
  );
}