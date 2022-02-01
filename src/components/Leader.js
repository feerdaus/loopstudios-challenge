import "./leader.css";
import interactive from "./images/desktop/interactive.jpg";

const Leader = () => {
  return (
    <section className="relative max-w-screen-lg mx-auto my-28">
      <div>
        <img src={interactive} alt="interactive" />
      </div>
      <div className="interactive-text pt-20 pl-20 bg-white">
        <h1 className="uppercase mb-4">The leader in interactive VR</h1>
        <p className="interactive-p">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default Leader;
