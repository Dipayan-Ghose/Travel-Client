import world from "./world img.png";
import hero from "./Hero img.png";
import plane from "./plane.png";
import beach from "./beach.jpg";
import card from "./card.jpg";
import road from "./road trip.png";
import "./Home.css";
import Form from "../../Components/Form/Form";
import LocationCard from "../../Components/LocationCard/LocationCard";
import { ClientSays } from "../../Components/ClientSays/ClientSays";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const info = [
  {
    id: 1,
    place: "Coxs Bazar",
    img: "https://i.ibb.co/47YCRb4/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sequi.",
  },
  {
    id: 2,
    place: "Bandarban",
    img: "https://i.ibb.co/RcbRG2J/rangamati.jpg",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sequi.",
  },
  {
    id: 3,
    place: "Jafflong",
    img: "https://i.ibb.co/m6GDVCz/bichanakandi.jpg",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sequi.",
  },
];

const randomPeople = [
  {
    id: 1,
    name: "Andrew",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  },
  {
    id: 2,
    name: "John",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  },
  {
    id: 3,
    name: "Gomes",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  },
];

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <main className="py-5 bg-gradient-to-t from-[#f8fafc] to-[#e6f9ff]">
      {/* ----------------hero section--------------- */}
      <div className="lg:flex items-center lg:h-[440px] lg:max-w-[1300px] mx-auto heroSection">
        <div className="mx-auto align-center w-full text-center lg:text-left lg:w-1/2 ">
          <h1 className="font-bold sm:w-max-[250px] lg:w-[400px] sm:text-xl lg:text-5xl">
            {" "}
            The Exotic <span className="text-[#3282AD]">Saint</span> Islands
          </h1>
          {/* <button className="bg-transparent text-[#3282AD] outline outline-2 p-2 text-sm rounded font-semibold hover:bg-[#3282AD] hover:outline-1 hover:text-white hover:-translate-y-.5 mt-6 ml-1">
            Discover Now
          </button> */}
          <a
            href="#_"
            class="relative inline-flex items-center justify-start inline-block px-4 py-2 overflow-hidden font-semibold rounded group mt-6 ml-1"
          >
            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#3282AD] opacity-100 group-hover:-translate-x-8"></span>
            <span class="relative w-full text-left text-[#3282AD] transition-colors duration-300 ease-in-out group-hover:text-white">
              Discover Now
            </span>
            <span class="absolute inset-0 border-2 border-[#3282AD] rounded"></span>
          </a>
        </div>

        <div className="relative lg:w-[1/2]">
          <img className="w-auto opacity-25" src={world} />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img className="w-48 lg:w-96" src={hero} />
          </div>
          <div className="absolute top-1/3 left-2/5 bottom-0">
            <img className="w-28" src={plane} />
          </div>
          <div className="absolute left-1/3 transform -translate-x-1/2 -bottom-12 rotate-12">
            <img className="w-32 border-4 border-white rounded" src={beach} />
          </div>
          <div className="absolute top-1/3 right-1/4 origin-top-right -rotate-12">
            <img className="w-20 border-2 border-white rounded " src={card} />
          </div>
          {/* <div className="absolute left-1/3 transform -translate-x-1/2 -bottom-10 -rotate-12">
            <img className="w-28 " src={road} />
          </div> */}
        </div>
      </div>

      {/* -------------booking Section------------ */}

      <div className="my-[100px]">
        <Form></Form>
      </div>

      {/* Best Package Section */}

      <div className="bestPackageSection my-5">
        <h1>Best Packages For You</h1>
        <p>
          This is a unique experience on ship, sea and land, exploring different
          coral islands of Lakshadweep.
        </p>

        <div className="flex gap-0 justify-center">
          <h2 className="locationBorder  cursor-pointer">Bandarban</h2>
          <h2 className="locationBorder cursor-pointer">Cox's Bazar</h2>
          <h2 className="locationBorder cursor-pointer">Rangamati</h2>
          <h2 className="locationBorder cursor-pointer">Jaaflong</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 justify-items-center w-[1200px] mx-auto mt-10">
        {info.map((data) => (
          <motion.div key={data.id} onClick={() => setSelectedId(data.id)}>
            <LocationCard data={data}></LocationCard>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="full-screen-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div layoutId={selectedId} className="selected-location">
                <motion.button
                  className="close-button"
                  onClick={() => setSelectedId(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                >
                  &#10005;
                </motion.button>
                <LocationCard
                  data={info.find((data) => data.id === selectedId)}
                ></LocationCard>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <section className="my-16">
        <div className="my-12">
          <h1 className="font-bold text-[50px]">
            What Our Clients Says <br></br>About Us
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-3 w-[1000px] mx-auto justify-content-center">
          {randomPeople.map((people) => (
            <ClientSays key={people.id} people={people}></ClientSays>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
