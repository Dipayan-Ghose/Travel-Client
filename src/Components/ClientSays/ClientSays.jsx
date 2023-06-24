import React, { useEffect, useState } from "react";
import "./ClientSays.css";

export const ClientSays = ({ people }) => {
  const { name, text } = people;

  const [change, setChange] = useState(1);
  useEffect(() => {
    const changePhoto = () => {
      const randomNumber = Math.ceil(Math.random() * 90);
      setChange(randomNumber);
    };
    changePhoto();
  }, []);
  console.log(change);

  return (
    <div className="w-48 hoverImage cursor-pointer">
      <img
        className="rounded-full my-3 mx-auto "
        src={`https://randomuser.me/api/portraits/men/${change}.jpg`}
      ></img>
      <h2 className="font-bold text-[28px] my-4">{name}</h2>
      <p>{text}</p>
    </div>
  );
};
