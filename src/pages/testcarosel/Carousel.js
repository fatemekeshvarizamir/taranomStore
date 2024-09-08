import React, { useState, useEffect, useRef } from 'react';
import styles from './Carousel.module.css';
import img1 from './img4.jpg';
import img2 from './Ftmkeshvari.jpg';
import img3 from './AmirPeykani.jpg';

const Carouselus = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);
    const timeAutoNext = 7000; // Auto-slide interval

    const items = [
        { img: img1, author: 'LUNDEV', title: 'Ashkan Safavi', topic: 'Project manager & Backend Developer', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', linkedin: 'https://www.linkedin.com/in/ashkan-safavi' },
        { img: img2, author: 'LUNDEV', title: 'Fateme Keshvari Zamir', topic: 'Frontend Developer', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', linkedin: 'https://www.linkedin.com/in/fatemeh-keshvari-zamir' },
        { img: img3, author: 'LUNDEV', title: 'Amir Peykani', topic: 'Frontend Developer', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', linkedin: 'https://www.linkedin.com/in/amir-peykani' },
    ];


    useEffect(() => {
        console.log('Items:', items); // Debugging output
        console.log('Current Index:', currentIndex); // Debugging output
        startAutoSlide();
        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex]);
    
    // useEffect(() => {
    //     startAutoSlide();
    //     return () => clearTimeout(timeoutRef.current);
    // }, [currentIndex]);

    const startAutoSlide = () => {
        timeoutRef.current = setTimeout(handleNext, timeAutoNext);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    const handleProfileClick = (url) => {
        console.log('Profile URL:', url); // Debugging output
        if (url) {
            window.open(url, '_blank'); // Open URL in a new tab
        } else {
            console.error('No LinkedIn URL provided!');
        }
    };


    return (
        <div className={styles.carousel}>
            <div className={styles.list}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.item} ${index === currentIndex ? styles.active : ''}`}
                    >
                        <img src={item.img} alt={item.title} />
                        <div className={styles.content}>
                            <div className={styles.author}>{item.author}</div>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.topic}>{item.topic}</div>
                            <div className={styles.desc}>{item.desc}</div>
                            <div className={styles.buttons}>
                                <button onClick={() => handleProfileClick(items[currentIndex].linkedin)}>SEE MY PROFILE</button>
                                <button>SUBSCRIBE</button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.arrows}>
                <button onClick={handlePrev}>&lt;</button>
                <button onClick={handleNext}>&gt;</button>
            </div>

            <div className={styles.thumbnail}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.thumbnailItem} ${index === currentIndex ? styles.thumbnailActive : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                    >
                        <img src={item.img} alt={item.title} style={{ cursor: "pointer" }} className={styles.imgK} />
                    </div>
                ))}
            </div>

            <div className={styles.time}></div>
        </div>
    );
};

export default Carouselus;
