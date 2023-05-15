import world from "./world img.png";
import hero from "./Hero img.png";
import plane from "./plane.png";
import beach from "./beach.jpg";
import card from "./card.jpg";
import "./Home.css";

const Home = () => {
  return (
    <main className="py-5 bg-gradient-to-t from-[#f8fafc] to-[#e6f9ff]">
      {/* ----------------hero section--------------- */}
      <div className="lg:flex items-center lg:h-[440px] lg:max-w-[1300px] mx-auto heroSection">
        <div className="mx-auto align-center w-full text-center lg:text-left lg:w-1/2 ">
          <h1 className="font-bold sm:w-max-[250px] lg:w-[400px] sm:text-xl lg:text-5xl">
            {" "}
            The Exotic <span className="text-[#3282AD]">Lakshadweep</span>{" "}
            Islands
          </h1>
          <button className="bg-transparent text-[#3282AD] outline outline-2 p-2 text-sm rounded font-semibold hover:bg-[#3282AD] hover:outline-1 hover:text-white hover:-translate-y-.5 mt-6 ml-1">
            Discover Now
          </button>
        </div>

        <div className="relative lg:w-[1/2]">
          <img className="w-auto opacity-25" src={world} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img className="w-48 lg:w-60" src={hero} />
          </div>
          <div className="absolute top-1/3 left-2/5 bottom-0">
            <img className="w-28" src={plane} />
          </div>
          <div className="absolute left-1/3 transform -translate-x-1/2 -bottom-10">
            <img className="w-28 border-4 border-white rounded" src={beach} />
          </div>
          <div className="absolute top-1/2 right-1/4 origin-top-right -rotate-12">
            <img className="w-20 border-2 border-white rounded " src={card} />
          </div>
        </div>
      </div>
      {/* -------------booking Section------------ */}
      <div className="card">
        <form>

        </form>
      </div>
    </main>
  );
};

export default Home;
