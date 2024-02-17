import { useState } from "react";
function SignIn() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="sign">
      <input
        type="email"
        required
        id="yourEmail"
        value={email}
        placeholder="Your email address"
        onChange={handleChange}
      />
      <button type="submit">Get Started &gt;</button>
    </div>
  );
}

export default SignIn;
