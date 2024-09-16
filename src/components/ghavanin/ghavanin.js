



// Ghavanin.js
// import React from 'react';

// import './ghavanin.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

// function Ghavanin() {
  
//   const [showPopup, setShowPopup] = React.useState(false);

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className="App">
//       <input
//         type="checkbox"
//         onChange={togglePopup}
//         checked={showPopup}
//         className='inputGHAVANIN'
//       />

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <FontAwesomeIcon
//               icon={faCircleXmark}
//               size="2xl"
//               style={{ color: "#ff0505", cursor: "pointer" }}
//               onClick={closePopup}
//               className="popup-closeGHAVANIN"
//             />
//             <h4 className='h4P'>متن قوانین</h4>
//             <label>

//               قوانین را مطالعه کردم و می‌پذیرم
//             </label>
//             <div className='mainbtnPup'>
//               <button
//                 className='btnPup'
//                 onClick={() => {
//                   closePopup();
//                 }}

//               >
//                 ادامه
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Ghavanin;
