import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from './productpage.module.css';
import SlideShow from '../Carousel/carousel';
import BtnrangiProduct from '../BUTTONS/btnProdicts/btnproduct';
import PopupForm from '../popup-Forn/PopupForm';
import Swal from 'sweetalert2';
import { useCart } from '../Like/CartContext';
import { CATEGORIES } from '../../data/categories';
import Bak from '../../assets/img/Bak.jpg'
export default function Cart() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    username: '',
    num: '',
    meetingdate: '',
    date: '',
    tasliatText: '',
    tasliatAddressedTo: ''
  });
  const { addToCart } = useCart();
  const { categoryId, productId } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product);

  useEffect(() => {
    if (!product) {
      const category = CATEGORIES[categoryId];
      if (category && category.data) {
        const prod = category.data.find(p => p.id.toString() === productId);
        setProduct(prod);
      }
    }
  }, [categoryId, productId, product]);

  const handleBtnClick = () => {
    setPopupVisible(true);
  };

  const handleContinueShopping = (e) => {
    if (!isFormValid()) {
      e.preventDefault();
      Swal.fire({
        icon: 'error',
        title: 'هشدار...',
        text: 'لطفا تمامی فیلد ها را تکمیل کنید',
      });
    } else {
      // Add the product to the cart
      if (product) {
        addToCart({ ...product, quantity: 1 }); // Ensure product has a quantity field
      }
      setFormValues({
        username: '',
        num: '',
        meetingdate: '',
        date: '',
        tasliatText: '',
        tasliatAddressedTo: ''
      });
      setPopupVisible(false);
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setFormValues({
      username: '',
      num: '',
      meetingdate: '',
      date: '',
      tasliatText: '',
      tasliatAddressedTo: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const isFormValid = () => {
    const { username, num, meetingdate, date, tasliatText, tasliatAddressedTo } = formValues;
    return username && num && meetingdate && date && tasliatText && tasliatAddressedTo;
  };

  if (!product) return <div>Loading...</div>;

  const images = product.images && product.images.length > 0 ? product.images : [{ url: product.imageUrl, caption: product.title }];

  return (
    <div className={styles.div1}>
      <div className={styles.bkimg}>
        {/* <img src={product.imageUrl} className={styles.img1} alt={product.title} /> */}
        <img src={Bak} className={styles.img1} alt={product.title} />
      </div>
      <div className={styles.div3}>
        <div className={styles.main}>
          <div className={styles.child1}>
            <SlideShow images={images} />
          </div>
          <div className={styles.child2}>
            <br /><br />
            <h2>{product.title}</h2>
            <hr />
            <h3>{product.fee} ریال</h3>
            <p>{product.description}</p>

            <BtnrangiProduct onClick={handleBtnClick} />

          </div>
        </div>
      </div>
      <PopupForm
        isPopupVisible={isPopupVisible}
        formValues={formValues}
        handleChange={handleChange}
        handleContinueShopping={handleContinueShopping}
        handleClosePopup={handleClosePopup}
      />
    </div>
  );
}
