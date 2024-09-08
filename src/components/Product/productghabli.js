// import React, { useState } from 'react';
// import { Rate, Pagination } from 'antd';
// import styles from './Product.module.css';
// import { CATEGORIES } from '../../data/categories';
// import BtnrangiProduct from '../BUTTONS/btnProdicts/btnproduct';
// import PopupForm from '../popup-Forn/PopupForm';
// import { useCart } from '../Like/CartContext';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// export default function Productc() {
//   const { addToCart } = useCart();
//   const [isPopupVisible, setPopupVisible] = useState(false);
//   const [formValues, setFormValues] = useState({
//     username: '',
//     num: '',
//     meetingdate: '',
//     date: '',
//     tasliatText: '',
//     tasliatAddressedTo: ''
//   });
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const navigate = useNavigate();

//   const handleBtnClick = (product) => {
//     setSelectedProduct(product);
//     handleBtnClickpopupon();
//   };

//   const handleProductClick = (categoryId, productId) => {
//     navigate(`/product/${categoryId}/${productId}`);
//   };

//   const handleBtnClickpopupon = () => {
//     setPopupVisible(true);
//   };

//   const handleContinueShopping = (e) => {
//     if (!isFormValid()) {
//       e.preventDefault(); // Prevent navigation
//       Swal.fire({
//         icon: 'error',
//         title: 'هشدار...',
//         text: 'لطفا تمامی فیلد ها را تکمیل کنید',
//       });
//     } else {
//       // Add the selected product to the cart
//       if (selectedProduct) {
//         addToCart({ ...selectedProduct, quantity: 1 });
//       }
//       setFormValues({
//         username: '',
//         num: '',
//         meetingdate: '',
//         date: '',
//         tasliatText: '',
//         tasliatAddressedTo: ''
//       });
//       setPopupVisible(false); // Close the popup
//     }
//   };

//   const handleClosePopup = () => {
//     setPopupVisible(false); // Close the popup
//     setFormValues({
//       username: '',
//       num: '',
//       meetingdate: '',
//       date: '',
//       tasliatText: '',
//       tasliatAddressedTo: ''
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const isFormValid = () => {
//     const { username, num, meetingdate, date, tasliatText, tasliatAddressedTo } = formValues;
//     return username && num && meetingdate && date && tasliatText && tasliatAddressedTo;
//   };

//   return (
//     <div className={styles.productbody}>
//       <div className={styles.titleproduct}>محصولات</div>
//       <div className={styles.filter}>
//         <div className={styles.rightfilter}>
//           <p className={styles.pfilter} style={{ fontWeight: 'bold' }}>مرتب سازی :</p>
//           <p className={styles.pfilter}>پربازدیدترین</p>
//           <p className={styles.pfilter}>جدیدترین</p>
//           <p className={styles.pfilter}>پرسفارش ترین</p>
//           <p className={styles.pfilter}>ارزان‌ترین</p>
//           <p className={styles.pfilter}>گران‌ترین</p>
//         </div>
//       </div>
//       <hr className={styles.hr} />
//       <div className={styles.main}>
//         <div className={styles.wrapper}>
//           {Object.keys(CATEGORIES).map((categoryId) => {
//             const category = CATEGORIES[categoryId];
//             if (!category || !category.data) return null;
//             return category.data.map((item) => (
//               <div
//                 className={styles.card}
//                 key={item.id}
//                 onClick={() => handleProductClick(categoryId, item.id)}
//               >
//                 <div className={styles.poster}>
//                   <img src={item.imageUrl} alt={item.name} />
//                 </div>
//                 <div className={styles.details}>
//                   <h1>{item.name}</h1>
//                   <div className={styles.rating}>
                   
//                   </div>
//                   <p className={styles.desc}>{item.description}</p>
//                   <p>{item.fee} ریال</p>
//                   <BtnrangiProduct onClick={(e) => { e.stopPropagation(); handleBtnClick(item); }} />
//                 </div>
//               </div>
//             ));
//           })}
//         </div>
//         <div className={styles.Parfooter}>
//           <Pagination
//             defaultCurrent={1}
//             total={50}
//             style={{ paddingTop: '40px', paddingBottom: '20px', direction: 'ltr' }}
//           />
//         </div>
//       </div>

//       <PopupForm
//         isPopupVisible={isPopupVisible}
//         formValues={formValues}
//         handleChange={handleChange}
//         handleContinueShopping={handleContinueShopping}
//         handleClosePopup={handleClosePopup}
//       />
//     </div>
//   );
// }