import { useNavigate } from "react-router-dom";
import netflixLogo from "../Images/logo.svg";
import SignIn from "../auth/SgnIn";
import HomeHeaderHeaderOne from "./HomeHeaderHeaderOne";
function HomeHeaderDetails() {
  const nav = useNavigate();
  const handleClick = () => {
    nav("sign");
  };
  return (
    <div>
      <div className="headerDetails">
        <img src={netflixLogo} alt="netflix-logo" />
        <button onClick={handleClick} className=" font-semibold">
          Sign In
        </button>
      </div>
      <HomeHeaderHeaderOne />
      <SignIn />
    </div>
  );
}

export default HomeHeaderDetails;
