import React, { useState, useEffect } from 'react';
import styles from './Drawer.module.css'
import { Link, useLocation } from 'react-router-dom';
import { CreditCardOutlined, HeartOutlined, HistoryOutlined, MessageOutlined, SendOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

export default function Drawer() {
    const { pathname } = useLocation();
    const [activeLink, setActiveLink] = useState(pathname);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };


    return (
        <div className={styles.menu}>

            <div className={styles.menu1}>
                <Link to={'/profile'} className={`${styles.boo} ${activeLink === '/profile' ? styles.activeLink : ''}`} onClick={() => handleLinkClick('/profile')}>
                    <div className={`${styles.icondiv} ${activeLink === '/profile' ? styles.activeLink : ''}`}>
                        <UserOutlined className={`${styles.icons} ${activeLink === '/profile' ? styles.activeLinkicons : ''}`} />
                    </div>
                    <span className={`${styles.span} ${activeLink === '/profile' ? styles.activeLinkspan : ''}`}>اطلاعات حساب کاربری</span>
                </Link>
            </div>

            <div className={styles.menu1}>
                <Link to={'/like'} className={`${styles.boo} ${activeLink === '/like' ? styles.activeLink : ''}`} onClick={() => handleLinkClick('/like')}>
                    <div className={`${styles.icondiv} ${activeLink === '/like' ? styles.activeLink : ''}`} >
                        <HeartOutlined className={`${styles.icons} ${activeLink === '/like' ? styles.activeLinkicons : ''}`} />
                    </div>
                    <span className={`${styles.span} ${activeLink === '/like' ? styles.activeLinkspan : ''}`} >لیست علاقه مندی </span>
                </Link>
            </div>

            <div className={styles.menu1} >
                <Link to={'/history'} className={`${styles.boo} ${activeLink === '/history' ? styles.activeLink : ''}`} onClick={() => handleLinkClick('/history')}>
                    <div className={`${styles.icondiv} ${activeLink === '/history' ? styles.activeLink : ''}`} >
                        <HistoryOutlined className={`${styles.icons} ${activeLink === '/history' ? styles.activeLinkicons : ''}`}  />
                    </div>
                    <span className={`${styles.span} ${activeLink === '/history' ? styles.activeLinkspan : ''}`} >تاریخچه سفارشات</span>
                </Link>
            </div>

            <div className={styles.menu1}>
                <Link to={'/ticket'} className={`${styles.boo} ${activeLink === '/ticket' ? styles.activeLink : ''}`} onClick={() => handleLinkClick('/ticket')}>
                    <div className={`${styles.icondiv} ${activeLink === '/ticket' ? styles.activeLink : ''}`} >
                        <SendOutlined className={`${styles.icons} ${activeLink === '/ticket' ? styles.activeLinkicons : ''}`}/>
                    </div>
                    <span className={`${styles.span} ${activeLink === '/ticket' ? styles.activeLinkspan : ''}`}>ارسال تیکت</span>
                </Link>
            </div>
            <div className={styles.menu1}>
                <Link to={'/pastticket'} className={`${styles.boo} ${activeLink === '/pastticket' ? styles.activeLink : ''}`} onClick={() => handleLinkClick('/pastticket')}>
                    <div className={`${styles.icondiv} ${activeLink === '/pastticket' ? styles.activeLink : ''}`} >
                        <MessageOutlined className={`${styles.icons} ${activeLink === '/pastticket' ? styles.activeLinkicons : ''}`}/>
                    </div>
                    <span className={`${styles.span} ${activeLink === '/pastticket' ? styles.activeLinkspan : ''}`}>تیکت های قبلی</span>
                </Link>
            </div>
            <div className={styles.menu1}>
                <Link className={styles.boo}>
                    <div className={styles.icondiv}>
                        <CreditCardOutlined className={styles.icons} />
                    </div>
                    <span className={styles.span}>اعتبار</span>
                </Link>
            </div>
        </div>
    )
}
