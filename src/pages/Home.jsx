import HomeHeader from "../comps/HomeComponents/HomeHeader";
import SectionOne from "../comps/firstSection/sectionOne";
import SectionFour from "../comps/fourthSection/SectionFour";
import SectionTwo from "../comps/secondSection/sectionTwo";
import SectionThree from "../comps/sectionThird/sectionThree";

function Home() {
  return (
    <div>
      <HomeHeader />
      <SectionOne />
      <hr />
      <SectionTwo />
      <hr />
      <SectionThree />
      <hr />
      <SectionFour />
    </div>
  );
}

export default Home;
