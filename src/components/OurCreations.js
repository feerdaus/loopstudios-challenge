import "./ourCreations.css";
import deepEarth from "./images/desktop/image-deep-earth.jpg";
import nightArcade from "./images/desktop/image-night-arcade.jpg";
import soccer from "./images/desktop/image-soccer-team.jpg";
import grid from "./images/desktop/image-grid.jpg";
import fromUp from "./images/desktop/image-from-above.jpg";
import pocket from "./images/desktop/image-pocket-borealis.jpg";
import curiosity from "./images/desktop/image-curiosity.jpg";
import fisheye from "./images/desktop/image-fisheye.jpg";
import deepEarth2 from "./images/mobile/image-deep-earth.jpg";
import nightArcade2 from "./images/mobile/image-night-arcade.jpg";
import soccer2 from "./images/mobile/image-soccer-team.jpg";
import grid2 from "./images/mobile/image-grid.jpg";
import fromUp2 from "./images/mobile/image-from-above.jpg";
import pocket2 from "./images/mobile/image-pocket-borealis.jpg";
import curiosity2 from "./images/mobile/image-curiosity.jpg";
import fisheye2 from "./images/mobile/image-fisheye.jpg";

const creations = [
  { image: deepEarth, description: "DEEP EARTH" },
  { image: nightArcade, description: "NIGHT ARCADE" },
  { image: soccer, description: "SOCCER TEAM VR" },
  { image: grid, description: "THE GRID" },
  { image: fromUp, description: "FROM UP ABOVE VR" },
  { image: pocket, description: "POCKET BOREALIS" },
  { image: curiosity, description: "THE CURIOSITY" },
  { image: fisheye, description: "MAKE IT FISHEYE" },
];

const creationsMobile = [
  { image: deepEarth2, description: "DEEP EARTH" },
  { image: nightArcade2, description: "NIGHT ARCADE" },
  { image: soccer2, description: "SOCCER TEAM VR" },
  { image: grid2, description: "THE GRID" },
  { image: fromUp2, description: "FROM UP ABOVE VR" },
  { image: pocket2, description: "POCKET BOREALIS" },
  { image: curiosity2, description: "THE CURIOSITY" },
  { image: fisheye2, description: "MAKE IT FISHEYE" },
];

const OurCreations = () => {
  return (
    <section className="max-w-screen-lg mx-auto mb-28 px-4">
      <div className="flex justify-between mb-20">
        <h1 className="text-center md:text-left w-full"> OUR CREATIONS</h1>
        <button className="hover:bg-black hidden md:block hover:text-white px-6 py-2">
          SEE ALL
        </button>
      </div>
      <div>
        <div className="hidden md:flex flex-wrap gap-6">
          {creations.map((creation) => (
            <div className="relative">
              <img
                src={creation.image}
                alt={creation.description}
                width={230}
                height={450}
              />
              <p className="creation-description absolute p-6 text-white">
                {creation.description}
              </p>
            </div>
          ))}
        </div>
        <div className="md:hidden flex flex-wrap gap-y-6 mx-auto">
          {creationsMobile.map((creation) => (
            <div className="relative">
              <img src={creation.image} alt={creation.description} />
              <p className="creation-description absolute p-6 text-white">
                {creation.description}
              </p>
            </div>
          ))}
        </div>
        <div>
          <button className="hover:bg-black md:hidden flex align-center hover:text-white px-6 py-2 mt-6">
            SEE ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurCreations;
