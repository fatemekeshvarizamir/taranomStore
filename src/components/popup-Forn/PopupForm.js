// // PopupForm.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import Swal from 'sweetalert2';
// import './popup.css';

// const PopupForm = ({
//   isPopupVisible,
//   formValues,
//   handleChange,
//   handleContinueShopping,
//   handleClosePopup,
// }) => {
//   if (!isPopupVisible) return null;

//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <FontAwesomeIcon
//           icon={faCircleXmark}
//           size="2xl"
//           style={{ color: "#ff0505", cursor: "pointer" }}
//           onClick={handleClosePopup}
//           className="popup-close"
//         />
//         <h2>فرم رزرو استند</h2>
//         <div className="parent-form">
//           <div className="child-form1">
//             <label>نام و نام خانوادگی</label>
//             <input
//               type="text"
//               name="username"
//               value={formValues.username}
//               onChange={handleChange}
//               required
//             />
//             <label>شماره تماس</label>
//             <input
//               type="text"
//               name="num"
//               value={formValues.num}
//               onChange={handleChange}
//               required
//             />
//             <label>تاریخ مراسم</label>
//             <input
//               type="text"
//               name="date"
//               value={formValues.date}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="child-form2">
//             <label>ساعت مراسم</label>
//             <input
//               type="text"
//               name="meetingdate"
//               value={formValues.meetingdate}
//               onChange={handleChange}
//               required
//             />
//             <label>متن پیشنهادی تسلیت</label>
//             <input
//               type="text"
//               name="tasliatText"
//               value={formValues.tasliatText}
//               onChange={handleChange}
//               required
//             />
//             <label>خطاب به</label>
//             <input
//               type="text"
//               name="tasliatAddressedTo"
//               value={formValues.tasliatAddressedTo}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
//         <Link onClick={handleContinueShopping} style={{ textDecoration: "none" }}>
//           <div className="pARENT-BTN-formREZERV">
//             <button type="button" className="BTN-formREZERV">
//               <h7>ادامه</h7>
//             </button>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default PopupForm;


import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './popup.css';

const PopupForm = ({
  isPopupVisible,
  formValues,
  handleChange,
  handleContinueShopping,
  handleClosePopup,
}) => {
  if (!isPopupVisible) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="2xl"
          style={{ color: "#ff0505", cursor: "pointer" }}
          onClick={handleClosePopup}
          className="popup-close"
        />
        <h3 className='popup-title'>فرم رزرو استند</h3>
        <div className="parent-form">
          <div className="child-form1">
            <label className='lable-popup'>نام و نام خانوادگی</label>
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              required
            />
            <label className='lable-popup'>شماره تماس</label>
            <input
              type="text"
              name="num"
              value={formValues.num}
              onChange={handleChange}
              required
            />
            <label className='lable-popup'>تاریخ مراسم</label>
            <input
              type="text"
              name="date"
              value={formValues.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="child-form2">
            <label className='lable-popup'>ساعت مراسم</label>
            <input
              type="text"
              name="meetingdate"
              value={formValues.meetingdate}
              onChange={handleChange}
              required
            />
            <label className='lable-popup'>متن پیشنهادی تسلیت</label>
            <input
              type="text"
              name="tasliatText"
              value={formValues.tasliatText}
              onChange={handleChange}
              required
            />
            <label className='lable-popup'>خطاب به</label>
            <input
              type="text"
              name="tasliatAddressedTo"
              value={formValues.tasliatAddressedTo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="pARENT-BTN-formREZERV">
            <button type="button" className="BTN-formREZERV" onClick={handleContinueShopping} style={{ textDecoration: "none" }}>
              <h7>ادامه</h7>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PopupForm;
