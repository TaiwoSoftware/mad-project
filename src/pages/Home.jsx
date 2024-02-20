import React from "react";
import HomeHeader from "../comps/HomeComponents/HomeHeader";
import SectionOne from "../comps/firstSection/sectionOne";
import SectionTwo from "../comps/secondSection/sectionTwo";

function Home() {
  return (
    <div>
      <HomeHeader />
      <SectionOne />
      <hr />
      <SectionTwo />
    </div>
  );
}

export default Home;
