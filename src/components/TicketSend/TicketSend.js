import React, { useState } from 'react';
import styles from './TicketSend.module.css';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    department: '',
    priority: '',
    message: '',
    attachments: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAttachmentChange = (event) => {
    const files = Array.from(event.target.files);
    setFormData({ ...formData, attachments: files });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      department: '',
      priority: '',
      message: '',
      attachments: [],
    });
  };

  return (
    <div className={styles.container}>
      <h2 style={{textAlign:"center"}}>ارسال تیکت</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <div className={styles.inline}>
            <div className={styles.inlineItem}>
              <label className={styles.name}>نام</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.inputticket}
                
              />
            </div>
            <div className={styles.inlineItem}>
              <label htmlFor="email">ایمیل</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.inputticket}
              />
            </div>
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.inline}>
            <div className={styles.inlineItem}>
              <label htmlFor="subject">موضوع</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={styles.inputticket}
              />
            </div>
            <div className={styles.inlineItem}>
              <label htmlFor="department">بخش</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className={styles.inputticket}
              >
                <option value="">انتخاب کنید</option>
                <option value="finance">مالی</option>
                <option value="hr">منابع انسانی</option>
                <option value="it">فناوری اطلاعات</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className={styles.inlineItem}>
              <label htmlFor="priority">اولویت</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                required
                className={styles.inputticket}
              >
                <option value="">انتخاب کنید</option>
                <option value="low">کم</option>
                <option value="medium">متوسط</option>
                <option value="high">بالا</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">پیام</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            cols="50"
            required
            className={styles.inputticket}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="attachments">ضمیمه‌ها</label>
          <input
            type="file"
            id="attachments"
            name="attachments"
            onChange={handleAttachmentChange}
            multiple
          />
        </div>
        <div className={styles.formGroupbtn}>
          <button type="submit" className={styles.sendbtn}>ارسال</button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
