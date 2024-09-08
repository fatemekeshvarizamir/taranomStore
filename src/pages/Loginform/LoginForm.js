import React, { useState } from 'react';
import styles from './Loginform.module.css';
import logo from '../../assets/img/logo.png';
import leftimg from '../../assets/img/r1.jpg'

export default function LoginForm() {
    const [rememberMe, setRememberMe] = useState(false);


    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className={styles.main}>
            <div className={styles.right}>
                <div className={styles.loginform}>
                    <div className={styles.topdiv}>
                        <h1 className={styles.h1}>ورود / ثبت نام</h1>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="username" className={styles.label1}> شماره تلفن</label>
                        <input type="text" id="username" className={styles.inputnumber} />
                    </div>
                    <div className={styles.divrememberMe}>
                        <label htmlFor="rememberMe" className={styles.rememberMeLabel}> مرا بخاط بسپار</label>
                        <input
                            type="checkbox"
                            // id="rememberMe"
                          
                            checked={rememberMe}
                            onChange={handleRememberMe}
                            // className={styles.checkbox}
                        />
                    </div>
                    <div className={styles.divbuttonlogin}><button className={styles.buttonlogin}>ورود</button></div>
                </div>
            </div>
            <div className={styles.left}><img src={leftimg} className={styles.leftimg}/></div>
        </div>
    );
}
