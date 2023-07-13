import React, { useState } from "react";
import Seat from "./Seat";
import { useParams } from "react-router-dom";

const SeatSelection = () => {
  const { seatClass } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);

  console.log("seat", seatClass);

  const handleSeatSelect = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      if (selectedSeats.length < 4) {
        setSelectedSeats([...selectedSeats, seatNumber]);
      } else {
        alert("You can not select more than 4");
      }
    }
  };
  return (
    <div className="my-10">
      <h2 className="mb-10 font-bold text-3xl text-[#2c93c9]">Bus Seat Selection</h2>
      <div className="w-[70%] flex mx-auto">
        <div className="w-56 border-4 rounded rounded-3 grid grid-cols-4 mx-auto justify-center ">
          {Array.from({ length: 32 }, (a, index) => index + 1).map(
            (seatNumber) => (
              <Seat
                key={seatNumber}
                seatNumber={seatNumber}
                isSelected={selectedSeats.includes(seatNumber)}
                onSelect={handleSeatSelect}
              />
            )
          )}
        </div>
        <div className="w-[40%] flex mx-auto">
          <div className="overflow-x-auto">
            <table className="table">
              
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Total Seat</th>
                  <th>Seat Fare</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                
                <tr>
                  <td>{seatClass?seatClass: "No Class Selected"}</td>
                  <td>{selectedSeats.length}</td>
                  <td>250</td>
                  <td>{selectedSeats.length * 250}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeatSelection;
