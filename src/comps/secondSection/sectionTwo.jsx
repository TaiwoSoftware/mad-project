import mobile from "../Images/mobile-0819.jpg";
function sectionTwo() {
  return (
    <div className="fs mt-24">
      <div className="flex gap-4">
        <div className="sectionTv">
          <img src={mobile} alt="mobile-image" />
        </div>
        <div className="sectionTwoDetails">
          <h1 className="text-white text-5xl font-bold">
            Download your <br />
            shows to watch offline
          </h1>
          <p className="text-white mt-4 text-2xl">
            Save your favorite easily and always have <br /> something to watch
          </p>
        </div>
      </div>
    </div>
  );
}

export default sectionTwo;
