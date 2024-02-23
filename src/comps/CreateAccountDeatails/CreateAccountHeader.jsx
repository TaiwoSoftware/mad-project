import { useNavigate } from "react-router-dom";
import netflixLogo from "../Images/logo.svg";
function CreateAccountHeader() {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/");
  };
  return (
    <div className="createAccountHeader">
      <img onClick={handleClick} src={netflixLogo} alt="logo" />
    </div>
  );
}

export default CreateAccountHeader;
