import netflixLogo from "../Images/logo.svg";
import SignIn from "../auth/SignIn";
import HomeHeaderHeaderOne from "./HomeHeaderHeaderOne";
function HomeHeaderDetails() {
  return (
    <div>
      <div className="headerDetails">
        <img src={netflixLogo} alt="netflix-logo" />
        <button className=" font-semibold">Sign In</button>
      </div>
      <HomeHeaderHeaderOne />
      <SignIn />
    </div>
  );
}

export default HomeHeaderDetails;
