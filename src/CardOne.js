import './Card.css';
import React from "react";
export default function CardOne() {
  return (
    <div className="flex-container">
      <div className="comp-card">
        <p className="title">BEST CREATIVE HACK</p>
        <hr className="line"></hr>
        <ul className="comp-content">
          <li className='loc'>KH, 5, Rd No. 5, Sector 15, Gandhinagar, Gujarat 382016</li>
          <li className='dat'>28th March 2022, Monday</li>
        </ul>
      </div>
    </div>
  );
}
