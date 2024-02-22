function questionsDiv({ question }) {
  return (
    <div className="fas">
      <div className="faqDiv flex  mt-4 items-center  justify-between p-5">
        <p className="text-white text-2xl font-normal">{question}?</p>
        <p className="text-white text-6xl font-thin cursor-pointer">+</p>
      </div>
    </div>
  );
}

export default questionsDiv;
