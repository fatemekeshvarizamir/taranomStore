// src/components/BUTTONS/BtnRangi/btnrangi.js
import React from 'react';
import './btnrangi.css';

export default function Btnrangi({ onClick }) {
  let data = [
    { id: 0, name: "اضافه به سبد خرید" }
  ];

  return (
    <div className="parentBtn">
      <button className="bn632-hover bn24" onClick={onClick}>
        <span>{data[0].name}</span>
      </button>
    </div>
  );
}
