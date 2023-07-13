import React, { useState } from "react";
import "./SeatStyle.css";
const Seat = ({ seatNumber, isSelected, onSelect }) => {
  const Style = {
    backgroundColor: isSelected ? "rgb(0,255,255)" : "rgb(255,228,196)",
    cursor: "pointer",
    margin: "5px",
    padding: "10px",
    color: "black",
  };

  return (
    
      <div
        className="seatStyle"
        style={Style}
        onClick={() => onSelect(seatNumber)}
      >
        {seatNumber}
      </div>
 
  );
};

export default Seat;
