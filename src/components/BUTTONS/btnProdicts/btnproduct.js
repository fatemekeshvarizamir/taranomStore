// import React from 'react'
// import './btnproduct.css'

// export default function BtnrangiProduct({ onClick }) {
//   let data = [
//     { id: 0, name: "افزودن به سبد خرید" }
//   ]
//   return (
//     <div className="parentBtn">
//       <button className="bn632-hover bn24" onClick={onClick}>
//         <span>{data[0].name}</span>
//       </button>
//     </div>
//   )
// }

import React from 'react';
import './btnproduct.css';

export default function BtnrangiProduct({ onClick }) {
  let data = [
    { id: 0, name: "افزودن به سبد خرید" }
  ];
  
  return (
    <div className="parentBtn">
      <button className="bn632-hover bn24" onClick={onClick}>
        <span>{data[0].name}</span>
      </button>
    </div>
  );
}
