// import React, { useState } from 'react';
// import './ghavanin.css'; // Your CSS file for styling
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


// function Ghavanin() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [lawChecked, setLawChecked] = useState(false);
//   const [buttonColor, setButtonColor] = useState('#808080'); // Initial gray color

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   const handleCheckboxChange = () => {
//     setLawChecked(!lawChecked);
//     // Change button color to black if rules are accepted, otherwise keep it gray
//     setButtonColor(lawChecked ? '#808080' : '#9966ff');
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
           
//               <FontAwesomeIcon
//                 icon={faCircleXmark}
//                 size="2xl"
//                 style={{ color: "#ff0505", cursor: "pointer" }}
//                 onClick={closePopup}
//                 className="popup-closeGHAVANIN"
//               />
            
//             <h4 className='h4P'> رم ایپسوم متن سالورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگیبیبی نامفهوم ازی</h4>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={lawChecked}
//                 onChange={handleCheckboxChange}
//                 className='inputGHAVANIN'
//               />
//               قوانین را مطالعه کردم و می‌پذیرم
//             </label>
//             <div className='mainbtnPup'>
//               <button className='btnPup' onClick={closePopup} style={{ backgroundColor: buttonColor, alignItems: 'center' }} disabled={!lawChecked}>ادامه</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Ghavanin;

// Ghavanin.js
import React from 'react';
import { useLaw } from './LawContext';
import './ghavanin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Ghavanin() {
  const { lawChecked, setLawChecked } = useLaw();
  const [showPopup, setShowPopup] = React.useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleCheckboxChange = () => {
    setLawChecked(!lawChecked);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <input
        type="checkbox"
        onChange={togglePopup}
        checked={showPopup}
        className='inputGHAVANIN'
      />

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <FontAwesomeIcon
              icon={faCircleXmark}
              size="2xl"
              style={{ color: "#ff0505", cursor: "pointer" }}
              onClick={closePopup}
              className="popup-closeGHAVANIN"
            />
            <h4 className='h4P'>متن قوانین</h4>
            <label>
              <input
                type="checkbox"
                checked={lawChecked}
                onChange={handleCheckboxChange}
                className='inputGHAVANIN'
              />
              قوانین را مطالعه کردم و می‌پذیرم
            </label>
            <div className='mainbtnPup'>
              <button
                className='btnPup'
                onClick={() => {
                  closePopup();
                  if (lawChecked) {
                    setLawChecked(true);
                  }
                }}
                style={{ backgroundColor: lawChecked ? '#9966ff' : '#808080' }}
                disabled={!lawChecked}
              >
                ادامه
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ghavanin;
