import TogglePlus from "./TogglePlus";

function questionsDiv({ question }) {
  return (
    <div className="fas">
      <div className="faqDiv flex  mt-4 items-center  justify-between p-5">
        <p className="text-white text-2xl font-normal">{question}?</p>
        <TogglePlus />
      </div>
      
    </div>
  );
}

export default questionsDiv;
