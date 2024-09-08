import React from 'react';
import styles from './MainLayout.module.css';

import Drawer from '../../Drawer/Drawer';

import Headerr from '../../Headeramir/Header';

import Heder from '../../Heder/heder';

 const MainLayoutProfile = ({ children }) => {
    return (
        <div className={styles.main}>
            <Heder/>
            <div className={styles.maincontent}>
                <div className={styles.content}>{children}</div>
                <div className={styles.drawer}><Drawer/></div>
            </div>
        </div>
    );
};

export default MainLayoutProfile;