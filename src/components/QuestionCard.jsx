const QuestionCard = ({ question, value, setValue, submitFunction }) => {
  async function onClick() {
    try {
      await setValue(question);
    } catch (error) {
      // Handle any errors that may occur during setValue or submitFunction
      console.error("An error occurred:", error);
    } 
  }


  return (
    <div className="w-80 h-42 bg-neutral-200 rounded-lg cursor-pointer">
      <button
        type="submit"
        onClick={onClick}
        className=" text-black p-5 text-md font-bold  font-magistral tracking-widest text-start "
      >
        {question}
      </button>
    </div>
  );
};

export default QuestionCard;
