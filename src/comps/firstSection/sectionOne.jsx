import tv from "../Images/tv.png";
function sectionOne() {
  return (
    <div className="fs mt-10">
      <div className=" flex justify-between">
        <div className="sectionDetails">
          <h1 className=" text-5xl font-bold mb-4 text-white mt-36">
            Enjoy on your TV
          </h1>
          <p className="text-white text-2xl">
            Watch on Smart TVs, Playstation, Xbox,
            <br /> Chromecast, Apple TV, Blu-ray players, and more.
          </p>
        </div>
        <div className="sectionTv">
          <img src={tv} alt="animated-tv" />
        </div>
      </div>
    </div>
  );
}

export default sectionOne;
