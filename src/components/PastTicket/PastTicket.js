import React, { useState, useEffect } from 'react';
import styles from './PastTicket.module.css';
import { UserOutlined } from '@ant-design/icons';

const PastTicket = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        department: '',
        priority: '',
        message: '',
        attachments: [],
    });

    const [pastMessages, setPastMessages] = useState([]);

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
        // Here you can implement sending the form data to the server
        console.log('Form Data:', formData);
        // Save the current message as a past message
        const currentDate = new Date().toLocaleDateString();
        const currentTime = new Date().toLocaleTimeString();
        const newPastMessage = {
            name: formData.name,
            date: currentDate,
            time: currentTime,
            message: formData.message,
        };
        setPastMessages([...pastMessages, newPastMessage]);
        // Clear the form fields after submission
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

    // Add sample messages when the component mounts
    useEffect(() => {
        const sampleMessage1 = {
            name: 'امیر محمد پیکانی',
            date: '1402/05/01',
            time: '10:00 AM',
            message: 'سلام خوبی چخبر چیکارا میکنی',
        };
        const sampleMessage2 = {
            name: 'فاطمه کشوری  ',
            date: '1403/05/02',
            time: '11:00 AM',
            message: 'سلام خوبی چخبر چیکارا میکنی',
        };
        setPastMessages([sampleMessage1, sampleMessage2]);
    }, []);

    return (
        <div className={styles.container}>
            <h2 style={{textAlign:"center"}}> تیکت های قبلی</h2>
            <div className={styles.pastMessages}>
                {pastMessages.map((message, index) => (
                    <div key={index} className={styles.message}>
                        <div className={styles.topdiv}>
                            <p className={styles.p1}>نام: {message.name} </p>
                            <p className={styles.p1}>تاریخ: {message.date} </p>
                            <p className={styles.p1}>زمان: {message.time}</p>
                        </div>
                        <p className={styles.pmessage}>{message.message}</p>
                    </div>
                ))}
            </div>
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

export default PastTicket;
