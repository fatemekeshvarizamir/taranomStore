// import React, { useState } from 'react';
// import { useCart } from '../Like/CartContext';
// import styles from './cart.module.css';
// import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
// import { PRODUCTS as initialProducts } from '../../data/data';
// import { Link } from 'react-router-dom';

// const Sabad2 = () => {
//   const [products, setProducts] = useState(initialProducts);
//   const [counts, setCounts] = useState(initialProducts.map(() => 0));

//   const increment = (index) => {
//     const newCounts = [...counts];
//     newCounts[index] += 1;
//     setCounts(newCounts);
//   };

//   const decrement = (index) => {
//     const newCounts = [...counts];
//     if (newCounts[index] > 0) {
//       newCounts[index] -= 1;
//       setCounts(newCounts);
//     }
//   };

//   const removeProduct = (index) => {
//     const newProducts = products.filter((_, i) => i !== index);
//     const newCounts = counts.filter((_, i) => i !== index);
//     setProducts(newProducts);
//     setCounts(newCounts);
//   };
//   let data = [
//     { id: 0, description: "  نحوه‌ی ارسال و پرداخت" },
//     { id: 1, name: " (تومان)قیمت نهایی", catch: "70,000 " },
//     { id: 2, name: "هزینه‌ی ارسال", catch: "35,000" },
//     { id: 3, name: "قابل پرداخت", catch: "105,000" },

//   ]
//   return (
//     <div className={styles.Parent}>
//       <div className={styles.div1}>
//         <div className={styles.Pchaild}>
//           <div className={styles.Textheader}>
//             <h2>سبد خرید</h2>

//           </div>
//           <div className={styles.p2}>
//             <div className={styles.saidbarSABAD}>
//               <div className={styles.side1}><p>قیمت کالاها :{data[1].catch}</p></div>
//               <hr></hr>
//               <div className={styles.side1}><p>جمع سبد خرید :{data[3].catch}</p></div>

//               <div className={styles.divA4}>
//                 <Link to={'/Sendpage'}><button className={styles.Btnrangi}><span>تایید و تکمیل سفارش</span></button></Link>
//               </div>

//             </div>
//             <div className={styles.Pmap}>

//               {products.map((product, index) => (

//                 <div key={product.id} className={styles.gradient} >

//                   <div className={styles.Premovebtn}>
//                     <button onClick={() => removeProduct(index)} className={styles.removebtn}><box-icon name='x' color='#36454f' ></box-icon></button></div>
//                   <div className={styles.pris}>{product.fee}</div>

//                   <div className={styles.counter}>
//                     <button onClick={() => decrement(index)} className={styles.counterbtn}><MinusOutlined /></button>
//                     <span>{counts[index]}</span>
//                     <button onClick={() => increment(index)} className={styles.counterbtn}><PlusOutlined /></button>
//                   </div>

//                   <div className={styles.divname}><h3>{product.caption}</h3><h7>{product.detail}</h7></div>
//                   <div className={styles.Pimg1}>
//                     <img src={product.imageUrl} className={styles.img1} />
//                   </div>

//                 </div>



//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sabad2;
