import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const options = [
  "Dhaka",
  "Chittagong",
  "Coxsbazar",
  "Sylhet",
  "Barishal",
  "Rajshahi",
];

const Form = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const [selectedFrom, setSelectedFrom] = useState(null);
  const [toOptions, setToOptions] = useState(options);

  const handleFromChange = (event) => {
    const value = event.target.value;
    setSelectedFrom(value);
    setToOptions(options.filter((option) => option !== value));
  };

  return (
    <div className="card lg:max-w-[1300px] bg-[#f2fcff] shadow mx-auto">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title mb-5 text-[#3282AD] text-xxl">
            Where Are You Flying?
          </h2>
          <div className="w-60 flex gap-2 ">
            <Datepicker
              placeholder="Pick Your Date"
              primaryColor={"indigo"}
              asSingle={true}
              value={value}
              useRange={false}
              onChange={handleValueChange}
            />
          </div>
        </div>

        <div className="flex lg:gap-2 mx-auto">
          <div className="flex gap-2">
            <select
              className="select w-48 select-bordered"
              onChange={handleFromChange}
            >
              <option disabled selected>
                From
              </option>

              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select className="select w-48 select-bordered">
              <option disabled selected>
                To
              </option>
              {toOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <select className="select select-bordered w-48">
              <option disabled selected>
                Passenger
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <select className="select select-bordered w-48">
              <option disabled selected>
                Class
              </option>
              <option>Economy</option>
              <option>Business</option>
            </select>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <a
            href="#_"
            class="relative inline-flex items-center justify-start py-3 pl-7 pr-7 overflow-hidden font-semibold text-[#3282AD] transition-all duration-150 ease-in-out rounded hover:pl-7 hover:pr-7 bg-transparent group"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#3282AD] group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            </span>
            <span class="absolute left-0 pl-2 -translate-x-4 group-hover:translate-x-0 ease-out duration-300">
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">
            Show Flights
            </span>
          </a>

  
        </div>
      </div>
    </div>
  );
};

export default Form;
