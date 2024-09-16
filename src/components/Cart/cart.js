// import React from 'react';
// import { useCart } from '../Like/CartContext';
// import styles from './cart.module.css';
// import { DoubleLeftOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';

// const Sabad = () => {
//   const { cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = useCart();

//   console.log("Cart contents:", cart);

//   const parseFee = (fee) => {
//     if (!fee) return 0;
//     return parseFloat(fee.replace(/[^0-9.]/g, ''));
//   };

//   const totalFee = cart.reduce((total, item) => {
//     const fee = parseFee(item.fee);
//     return total + fee * item.quantity;
//   }, 0);

//   return (
//     <div className={styles.Parent}>
//       <div className={styles.div1}>
//         <div className={styles.Pchaild}>
//           <div className={styles.Textheader}>
//             <h2>سبد خرید</h2>
//           </div>
//           <div className={styles.p2}>
//             <div className={styles.saidbarSABAD}>
//               <div className={styles.side1}>
//                 <p>جمع نهایی کالاها: {totalFee.toLocaleString()} ریال</p>
//               </div>
//               <hr />
//               <div className={styles.divA4}>
//                 <Link to={'/Sendpage'}>
//                   <button className={styles.Btnrangi}><span>تایید و تکمیل سفارش</span></button>
//                 </Link>

//                 <div className={styles.clearSABAD}><button onClick={clearCart} className={styles.btnclear}><span> خالی کردن سبد خرید</span></button></div>
//                 <Link to={'/'} style={{ textDecoration: "none", color: "rgb(0, 159, 227)" }}>
//                   <div className={styles.bakshop}><DoubleLeftOutlined /><span>برگشت به فروشگاه</span></div>
//                 </Link>

//               </div>
//             </div>
//             {cart.length === 0 ? (
//               <div className={styles.PmapEMPTY} >
//                 <lord-icon
//                   src="https://cdn.lordicon.com/guothkao.json"
//                   trigger="loop"
//                   delay="2000"
//                   stroke="bold"
//                   style={{ width: '100px', height: '100px' }}
//                 >
//                 </lord-icon>
//                 <h4>درحال حاضر سبد خرید شما خالی است</h4>
//               </div>
//             ) : (
//               <div className={styles.Pmap} >
//                 {cart.map((product) => (
//                   <div key={product.id} className={styles.gradient}>
//                     <div className={styles.Premovebtn}>
//                       <button onClick={() => removeFromCart(product.id)} className={styles.removebtn}>
//                         <box-icon name='x' color='#36454f' style={{ overflow: "hidden" }}></box-icon>
//                       </button>
//                     </div>
//                     <div className={styles.pris}>{product.fee}</div>
//                     <div className={styles.counter}>
//                       <button onClick={() => decrementQuantity(product.id)} className={styles.counterbtn}>
//                         <MinusOutlined />
//                       </button>
//                       <span>{product.quantity}</span>
//                       <button onClick={() => incrementQuantity(product.id)} className={styles.counterbtn}>
//                         <PlusOutlined />
//                       </button>
//                     </div>
//                     <div className={styles.divname}>
//                       <h3>{product.title}</h3>
//                       <h7>{product.detail}</h7>
//                     </div>
//                     <div className={styles.Pimg1}>
//                       <img src={product.imageUrl} className={styles.img1} alt={product.title} />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sabad;



import React from 'react';
import { useCart } from '../Like/CartContext';
import styles from './cart.module.css';
import { DoubleLeftOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Sabad = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart, totalFee } = useCart();

  return (
    <div className={styles.Parent}>
      <div className={styles.div1}>
        <div className={styles.Pchaild}>
          <div className={styles.Textheader}>
            <h2>سبد خرید</h2>
          </div>
          <div className={styles.p2}>
            <div className={styles.saidbarSABAD}>
              <div className={styles.side1}>
                <p>قیمت کالاها: {totalFee.toLocaleString()} ریال</p>
              </div>
              <hr />
              <div className={styles.divA4}>
                <Link to={'/Sendpage'}>
                  <button className={styles.Btnrangi}><span>تایید و تکمیل سفارش</span></button>
                </Link>
                <div className={styles.clearSABAD}>
                  <button onClick={clearCart} className={styles.btnclear}><span>خالی کردن سبد خرید</span></button>
                </div>
                <Link to={'/'} style={{ textDecoration: "none", color: "rgb(0, 159, 227)" }}>
                  <div className={styles.bakshop}><DoubleLeftOutlined /><span>برگشت به فروشگاه</span></div>
                </Link>
              </div>
            </div>
            {cart.length === 0 ? (
              <div className={styles.PmapEMPTY}>
                <lord-icon
                  src="https://cdn.lordicon.com/guothkao.json"
                  trigger="loop"
                  delay="1500"
                  stroke="bold"
                  style={{ width: '100px', height: '100px' }}
                >
                </lord-icon>
                <h4>درحال حاضر سبد خرید شما خالی است</h4>
              </div>
            ) : (
              <div className={styles.Pmap}>
                {cart.map((product) => (
                  <div className={styles.maingradient}>
                    <div key={product.id} className={styles.gradient}>
                      <div className={styles.Premovebtn}>
                        <button onClick={() => removeFromCart(product.id)} className={styles.removebtn}>
                          <box-icon name='x' color='#36454f' style={{ overflow: "hidden" }}></box-icon>
                        </button>
                      </div>

                      <div className={styles.pris}>{product.fee}</div>
                      <div className={styles.counter}>
                        <button onClick={() => decrementQuantity(product.id)} className={styles.counterbtn}>
                          <MinusOutlined />
                        </button>
                        <span>{product.quantity}</span>
                        <button onClick={() => incrementQuantity(product.id)} className={styles.counterbtn}>
                          <PlusOutlined />
                        </button>
                      </div>
                      <div className={styles.divname}>
                        <h3>{product.title}</h3>
                        <h7>{product.detail}</h7>
                      </div>
                      <div className={styles.Pimg1}>
                        <img src={product.imageUrl} className={styles.img1} alt={product.title} />

                      </div>

                    </div><div ><hr className={styles.hrsabad} /></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sabad;
