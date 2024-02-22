import { useState } from "react";
import QuestionsDiv from "./questionsDiv";
function Faqs() {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="mt-16 font-bold">
      <h1 className="text-white text-5xl text-center mb-10">
        Frequently Asked Question
      </h1>
      <QuestionsDiv question="What is Netflix" />
      <QuestionsDiv question="How much does Netflix cost" />
      <QuestionsDiv question="Where can i watch" />
      <QuestionsDiv question="How do i cancel" />
      <QuestionsDiv question="What can i watch on Netflix" />
      <QuestionsDiv question="Is Netflix good for kids" />

      <p className="text-white font-normal text-center mt-8 text-1xl">
        Ready to watch? Enter your email to create or restart your membership
      </p>
      <div className=" mt-[-3rem] mb-16 sign">
        <input
          className="font-normal text-white"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Email address"
        />
        <button className="text-whit">Get Started &gt;</button>
      </div>
    </div>
  );
}

export default Faqs;
