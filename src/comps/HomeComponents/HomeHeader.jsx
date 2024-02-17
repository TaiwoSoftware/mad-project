import HomeHeaderDetails from "./HomeHeaderDetails";
function HomeHeader() {
  return (
    <header>
      <div className="div">
        <div className="backgroundHeader"></div>

        <div className="layer">
          <HomeHeaderDetails />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
