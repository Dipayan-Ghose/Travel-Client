const LocationCard = ({ data }) => {
  const { place, para, img } = data;
  return (
    <div>
      <div className="card w-72 h-96 glass hover:cursor-pointer border hover:border-1">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="card-title text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              {place} Package
            </h2>
          </div>
          <p className="text-xs">{para}</p>
          <div className="card-actions justify-center">
          
            <a
              href="#_"
              class="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#3282AD] rounded group transition transform hover:-translate-y-0.5"
            >
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#2c93c9] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span class="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span class="relative">Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
