import "./leader.css";
import interactive from "./images/desktop/interactive.jpg";

const Leader = () => {
  return (
    <section className="relative max-w-screen-lg mx-auto my-28 px-4">
      <div>
        <img src={interactive} alt="interactive" />
      </div>
      <div className="interactive-text md:pt-16 md:pl-16 pr-8 bg-white mt-12 flex flex-col md:absolute mx-auto text-center md:text-left ">
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
