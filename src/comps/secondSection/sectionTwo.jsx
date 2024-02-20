import mobile from "../Images/mobile-0819.jpg";
function sectionTwo() {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <img src={mobile} alt="mobile-image" />
        </div>
        <div>
          <h1 className="text-white text-4xl font-bold">
            Download your shows to watch offline
          </h1>
          <p>Save your favorite easily and always have something to watch</p>
        </div>
      </div>
    </div>
  );
}

export default sectionTwo;
