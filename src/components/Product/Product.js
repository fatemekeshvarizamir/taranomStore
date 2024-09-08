


// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams, useLocation } from 'react-router-dom';
// import { Pagination } from 'antd';
// import styles from './Product.module.css';
// import { CATEGORIES } from '../../data/categories';
// import BtnrangiProduct from '../BUTTONS/btnProdicts/btnproduct';
// import PopupForm from '../popup-Forn/PopupForm';
// import { useCart } from '../Like/CartContext';
// import Swal from 'sweetalert2';
// import { useSpring, animated } from '@react-spring/web';

// export default function Productc() {
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 4;
//     const [sortType, setSortType] = useState('');

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     const { addToCart } = useCart();
//     const navigate = useNavigate();
//     const { categoryId } = useParams();
//     const location = useLocation();
//     const [category, setCategory] = useState(location.state?.category);
//     const [isPopupVisible, setPopupVisible] = useState(false);
//     const [formValues, setFormValues] = useState({
//         username: '',
//         num: '',
//         meetingdate: '',
//         date: '',
//         tasliatText: '',
//         tasliatAddressedTo: ''
//     });
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     useEffect(() => {
//         if (!category && categoryId) {
//             const fetchedCategory = CATEGORIES[categoryId];
//             setCategory(fetchedCategory);
//         }
//     }, [categoryId, category]);

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;

//     //items لیست محصولات 
//     // type نوع فیلتر 
//     const sortItems = (items, type) => {
//         switch (type) {
//             case 'پربازدیدترین': // Most Viewed
//                 return items.sort((a, b) => b.views - a.views);
//             case 'جدیدترین': // Newest
//                 return items.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
//             case 'پرفروش ترین': // Most Ordered
//                 return items.sort((a, b) => b.orders - a.orders);
//             case 'ارزان‌ترین': // Cheapest
//                 return items.sort((a, b) => a.fee - b.fee);
//             case 'گران‌ترین': // Most Expensive
//                 return items.sort((a, b) => b.fee - a.fee);
//             default:
//                 return items;
//         }
//     };

//     const sortedItems = category ? sortItems([...category.data], sortType) : [];
//     const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

//     const handleBtnClick = (product) => {
//       setSelectedProduct(product);
//       setPopupVisible(true); // باز کردن پاپ‌آپ فرم
//   };
  

//     const handleProductClick = (categoryId, productId) => {
//         const selectedProduct = category.data.find(item => item.id.toString() === productId.toString());
//         navigate(`/CartPage/${categoryId}/${productId}`, { state: { product: selectedProduct } });
//     };

//     const handleContinueShopping = (e) => {
//         if (!isFormValid()) {
//             e.preventDefault(); // Prevent navigation
//             Swal.fire({
//                 icon: 'error',
//                 title: 'هشدار...',
//                 text: 'لطفا تمامی فیلد ها را تکمیل کنید',
//             });
//         } else {
//             if (selectedProduct) {
//                 addToCart({ ...selectedProduct, quantity: 1 });
//             }
//             setFormValues({
//                 username: '',
//                 num: '',
//                 meetingdate: '',
//                 date: '',
//                 tasliatText: '',
//                 tasliatAddressedTo: ''
//             });
//             setPopupVisible(false); // Close the popup
//         }
//     };

//     const handleClosePopup = () => {
//         setPopupVisible(false); // Close the popup
//         setFormValues({
//             username: '',
//             num: '',
//             meetingdate: '',
//             date: '',
//             tasliatText: '',
//             tasliatAddressedTo: ''
//         });
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues({
//             ...formValues,
//             [name]: value,
//         });
//     };

//     const isFormValid = () => {
//         const { username, num, meetingdate, date, tasliatText, tasliatAddressedTo } = formValues;
//         return username && num && meetingdate && date && tasliatText && tasliatAddressedTo;
//     };

//     const cardSpring = useSpring({
//         from: { transform: 'translateY(100px)', opacity: 0 },
//         to: { transform: 'translateY(0)', opacity: 1 },
//         config: { duration: 1000 },
//     });

//     if (!category) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className={styles.productbody}>
//             <div className={styles.titleproduct}>{category.name}</div>
//             <div className={styles.filter}>
//                 <div className={styles.rightfilter}>
//                     <p
//                         className={styles.pfilter}
//                         style={{ fontWeight: sortType === 'پربازدیدترین' ? 'bold' : 'normal' }}
//                         onClick={() => setSortType('پربازدیدترین')}
//                     >
//                         پربازدیدترین
//                     </p>
//                     <p
//                         className={styles.pfilter}
//                         style={{ fontWeight: sortType === 'جدیدترین' ? 'bold' : 'normal' }}
//                         onClick={() => setSortType('جدیدترین')}
//                     >
//                         جدیدترین
//                     </p>
//                     <p
//                         className={styles.pfilter}
//                         style={{ fontWeight: sortType === 'پرفروش ترین' ? 'bold' : 'normal' }}
//                         onClick={() => setSortType('پرفروش ترین')}
//                     >
//                         پرفروش ترین
//                     </p>
//                     <p
//                         className={styles.pfilter}
//                         style={{ fontWeight: sortType === 'ارزان‌ترین' ? 'bold' : 'normal' }}
//                         onClick={() => setSortType('ارزان‌ترین')}
//                     >
//                         ارزان‌ترین
//                     </p>
//                     <p
//                         className={styles.pfilter}
//                         style={{ fontWeight: sortType === 'گران‌ترین' ? 'bold' : 'normal' }}
//                         onClick={() => setSortType('گران‌ترین')}
//                     >
//                         گران‌ترین
//                     </p>
//                 </div>
//             </div>
//             <hr className={styles.hr} />
//             <div className={styles.main}>
//                 <div className={styles.wrapper}>
//                     {currentItems.map((item) => (
//                         <animated.div style={cardSpring} className={styles.card} key={item.id}>
//                             <div
//                                 className={styles.poster}
//                                 onClick={() => handleProductClick(category.id, item.id)}
//                             >
//                                 <img src={item.imageUrl} alt={item.name} />
//                             </div>
//                             <div
//                                 onClick={() => handleProductClick(category.id, item.id)}
//                                 className={styles.details}>
//                                 <h1>{item.name}</h1>
//                                 <div className={styles.rating}>
//                                     {/* Add rating component if needed */}
//                                 </div>
//                                 <p className={styles.desc}>{item.description}</p>
//                                 <p>{item.fee.toLocaleString()} ریال</p>
//                                 <BtnrangiProduct onClick={(e) => { e.stopPropagation(); handleBtnClick(item); }} />
//                             </div>
//                         </animated.div>
//                     ))}
//                 </div>
//                 {category.data.length > itemsPerPage && (
//                     <Pagination
//                         className={styles.pagination}
//                         current={currentPage}
//                         pageSize={itemsPerPage}
//                         onChange={handlePageChange}
//                         total={sortedItems.length}
//                     />
//                 )}
//                 {isPopupVisible && (
//                     <PopupForm
//                         formValues={formValues}
//                         handleChange={handleChange}
//                         handleContinueShopping={handleContinueShopping}
//                         handleClosePopup={handleClosePopup}
//                     />
//                 )}
//             </div>
//         </div>
//     );
// }



import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Pagination } from 'antd';
import styles from './Product.module.css';
import { CATEGORIES } from '../../data/categories';
import BtnrangiProduct from '../BUTTONS/btnProdicts/btnproduct';
import PopupForm from '../popup-Forn/PopupForm';
import { useCart } from '../Like/CartContext';
import Swal from 'sweetalert2';
import { useSpring, animated } from '@react-spring/web';

export default function Productc() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const [sortType, setSortType] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [formValues, setFormValues] = useState({
        username: '',
        num: '',
        meetingdate: '',
        date: '',
        tasliatText: '',
        tasliatAddressedTo: ''
    });

    const navigate = useNavigate();
    const { categoryId } = useParams();
    const location = useLocation();
    const [category, setCategory] = useState(location.state?.category);
    const { addToCart } = useCart();

    useEffect(() => {
        if (!category && categoryId) {
            const fetchedCategory = CATEGORIES[categoryId];
            setCategory(fetchedCategory);
        }
    }, [categoryId, category]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const sortItems = (items, type) => {
        switch (type) {
            case 'پربازدیدترین': return items.sort((a, b) => b.views - a.views);
            case 'جدیدترین': return items.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
            case 'پرفروش ترین': return items.sort((a, b) => b.orders - a.orders);
            case 'ارزان‌ترین': return items.sort((a, b) => a.fee - b.fee);
            case 'گران‌ترین': return items.sort((a, b) => b.fee - a.fee);
            default: return items;
        }
    };

    const sortedItems = category ? sortItems([...category.data], sortType) : [];
    const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleBtnClick = (product) => {
        setSelectedProduct(product);
        setPopupVisible(true);
    };

    const handleProductClick = (categoryId, productId) => {
        const selectedProduct = category.data.find(item => item.id.toString() === productId.toString());
        navigate(`/CartPage/${categoryId}/${productId}`, { state: { product: selectedProduct } });
    };

    const handleContinueShopping = () => {
        if (!isFormValid()) {
            Swal.fire({
                icon: 'error',
                title: 'هشدار...',
                text: 'لطفا تمامی فیلد ها را تکمیل کنید',
            });
        } else {
            if (selectedProduct) {
                addToCart({ ...selectedProduct, quantity: 1 });
            }
            setFormValues({
                username: '',
                num: '',
                meetingdate: '',
                date: '',
                tasliatText: '',
                tasliatAddressedTo: ''
            });
            setPopupVisible(false);
        }
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
        setFormValues({
            username: '',
            num: '',
            meetingdate: '',
            date: '',
            tasliatText: '',
            tasliatAddressedTo: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const isFormValid = () => {
        const { username, num, meetingdate, date, tasliatText, tasliatAddressedTo } = formValues;
        return username && num && meetingdate && date && tasliatText && tasliatAddressedTo;
    };

    const cardSpring = useSpring({
        from: { transform: 'translateY(100px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
        config: { duration: 1000 },
    });

    if (!category) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.productbody}>
            <div className={styles.titleproduct}>{category.name}</div>
            <div className={styles.filter}>
                <div className={styles.rightfilter}>
                    {['پربازدیدترین', 'جدیدترین', 'پرفروش ترین', 'ارزان‌ترین', 'گران‌ترین'].map(type => (
                        <p
                            key={type}
                            className={styles.pfilter}
                            style={{ fontWeight: sortType === type ? 'bold' : 'normal' }}
                            onClick={() => setSortType(type)}
                        >
                            {type}
                        </p>
                    ))}
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.main}>
                <div className={styles.wrapper}>
                    {currentItems.map((item) => (
                        <animated.div style={cardSpring} className={styles.card} key={item.id}>
                            <div
                                className={styles.poster}
                                onClick={() => handleProductClick(category.id, item.id)}
                            >
                                <img src={item.imageUrl} alt={item.name} />
                            </div>
                            <div
                                onClick={() => handleProductClick(category.id, item.id)}
                                className={styles.details}
                            >
                                <h1>{item.name}</h1>
                                <div className={styles.rating}>
                                    {/* Add rating component if needed */}
                                </div>
                                <p className={styles.desc}>{item.description}</p>
                                <p>{item.fee.toLocaleString()} ریال</p>
                                <BtnrangiProduct onClick={(e) => { e.stopPropagation(); handleBtnClick(item); }} />
                            </div>
                        </animated.div>
                    ))}
                </div>
                {category.data.length > itemsPerPage && (
                    <Pagination
                        className={styles.pagination}
                        current={currentPage}
                        pageSize={itemsPerPage}
                        onChange={handlePageChange}
                        total={sortedItems.length}
                    />
                )}
                {isPopupVisible && (
                    <PopupForm
                        isPopupVisible={isPopupVisible}
                        formValues={formValues}
                        handleChange={handleChange}
                        handleContinueShopping={handleContinueShopping}
                        handleClosePopup={handleClosePopup}
                    />
                )}
            </div>
        </div>
    );
}
