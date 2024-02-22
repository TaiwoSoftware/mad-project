import Footer from "../comps/Footer/Footer";
import Faqs from "../comps/Frequently/faqs";
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
      <hr />
      <Faqs />
      <hr />
      <Footer />
    </div>
  );
}

export default Home;
