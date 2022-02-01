import "./ourCreations.css";
import deepEarth from "./images/desktop/image-deep-earth.jpg";
import nightArcade from "./images/desktop/image-night-arcade.jpg";
import soccer from "./images/desktop/image-soccer-team.jpg";
import grid from "./images/desktop/image-grid.jpg";
import fromUp from "./images/desktop/image-from-above.jpg";
import pocket from "./images/desktop/image-pocket-borealis.jpg";
import curiosity from "./images/desktop/image-curiosity.jpg";
import fisheye from "./images/desktop/image-fisheye.jpg";

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

const OurCreations = () => {
  return (
    <section className="max-w-screen-lg mx-auto mb-28">
      <div className="flex justify-between mb-20">
        <h1> OUR CREATIONS</h1>
        <button className="hover:bg-black hover:text-white px-4">
          SEE ALL
        </button>
      </div>
      <div>
        <div className="flex flex-wrap gap-6">
          {creations.map((creation) => (
            <div className="relative">
              <img
                src={creation.image}
                alt={creation.description}
                width={238}
                height={450}
              />
              <p className="creation-description absolute p-6 text-white">
                {creation.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCreations;
