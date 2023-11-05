const QuestionCard = ({ question, value, setValue, submitFunction }) => {
  async function onClick() {
    try {
      await setValue(question);
      await submitFunction();
    } catch (error) {
      // Handle any errors that may occur during setValue or submitFunction
      console.error("An error occurred:", error);
    }
  }
  return (
    <div className="w-80 h-40  bg-neutral-200 rounded-lg cursor-pointer">
      <div onClick={onClick} className=" text-black p-5 text-xl font-normal ">
        {question}
      </div>
    </div>
  );
};

export default QuestionCard;
