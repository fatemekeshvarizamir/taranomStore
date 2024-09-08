import React, { useState } from 'react';
import { Input, Button } from 'antd';
import styles from './kod.module.css'

const DiscountCodeInput = () => {
  const [discountCode, setDiscountCode] = useState('');

  const handleChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleSubmit = () => {
    
    console.log('Submitted discount code:', discountCode);
 
    setDiscountCode('');
  };

  return (
    <div className={styles.main}>
      
      <button type="primary" onClick={handleSubmit}  className={styles.btnCode} >ثبت</button>
      <Input 
        value={discountCode} 
        onChange={handleChange} 
        placeholder="کد تخفیف خود را وارد کنید" 
        style={{ width: '200px',backgroundColor:"#ffffff",height:"5vh"}} 
        className={styles.inputKode}
      />
      
      
    </div>
  );
};

export default DiscountCodeInput;
