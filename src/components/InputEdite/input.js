import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import styles from './input.module.css'

const EditSaveComponent = () => {
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState('');

  const toggleEditable = () => {
    setEditable(!editable);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    // Perform save action here, like making an API call
    console.log('Saving:', text);
    setEditable(false);
  };

  return (
    <div className={styles.maininput}>
    
      <Button 
       className={styles.Binput}
        icon={editable ? <SaveOutlined /> : <EditOutlined />} 
        onClick={editable ? handleSave : toggleEditable} 
      />

    <Input 
        placeholder='تهران تهرانپارس خیابان فرجام غربی کوچه 188 غربی پلاک 31'
        value={text} 
        onChange={handleChange} 
        readOnly={!editable} 
        className={styles.inputAddress}
      />
    </div>
  );
};

export default EditSaveComponent;
