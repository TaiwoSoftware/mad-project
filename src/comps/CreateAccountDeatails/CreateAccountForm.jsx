import { useState } from "react";

function CreateAccountForm() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState("");
  const handleEmailValue = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordValue = (e) => {
    setPasswordValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="container">
      <form>
        <div className="innerForm">
          <h2 className="text-white font-semibold text-5xl">Sign In</h2>
          <input
            type="email"
            name="email"
            value={emailValue}
            onChange={handleEmailValue}
            required
            placeholder="Email or Phone number"
          />
          <input
            type="password"
            name="password"
            value={passwordValue}
            onChange={handlePasswordValue}
            required
            placeholder="Password"
          />
          <input type="submit" className="text-white" value="Sign In" />
        </div>
      </form>
      <div className=" flex justify-between formLowDetails">
        <div className="flex items-center">
          <input type="checkbox" name="checkbox" id="checker" checked />
          <p className=" mr-48 text-1xl text-gray-400">Remeber me</p>
        </div>
        <p className=" text-gray-400">Need help?</p>
      </div>
      <div className="security">
        <span className="flex gap-1">
          <p className="text-gray-400">New to Netflix?</p>
          <p>Sign up now.</p>
        </span>
        <p className="text-gray-400">
          This page is protected by Google reCAPTCHA to <br /> ensure you are
          not a bot . Learn more.
        </p>
      </div>
    </div>
  );
}

export default CreateAccountForm;
