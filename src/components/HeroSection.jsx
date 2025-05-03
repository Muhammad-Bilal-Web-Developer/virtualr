import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirstualR build tool
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ducimus
        labore et hic porro quia, veniam quam quaerat neque quibusdam harum
        magni odio sequi dicta suscipit facilis possimus nemo asperiores.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for Free
        </a>
        <a href="#" className="py-3 px-4 mx-3 border rounded-md ">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          src={video1}
          type="video/mp4"
        >
          Your Browser doesn't support Video
        </video>
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          src={video2}
          type="video/mp4"
        >
          Your Browser doesn't support Video
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
