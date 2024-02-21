import QuestionsDiv from "./questionsDiv";
function Faqs() {
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
    </div>
  );
}

export default Faqs;
