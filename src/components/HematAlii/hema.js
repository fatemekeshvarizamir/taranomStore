import React, { useState } from 'react';
import { Input, Button } from 'antd';
import styles from './hemat.module.css'

const Hematali = () => {
  const [discountCode, setDiscountCode] = useState('');

  const handleChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleSubmit = () => {

    console.log('Submitted discount code:', discountCode);

    setDiscountCode('');
  };

  return (
    <div>
     
      <div className={styles.main}>

        <h6>همت عالی</h6>
        <Input
          value={discountCode}
          onChange={handleChange}
          placeholder="170.000.000"
          className={styles.inputHemat}

        />
        {/* <Button type="primary" onClick={handleSubmit}>ثبت</Button> */}

      </div>
    </div>
  );
};

export default Hematali;
