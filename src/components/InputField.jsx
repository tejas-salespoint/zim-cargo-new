const InputField = ({ value, setValue , submitFunction }) => {
  return (
    <form className="w-full">
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="search"
          id="search"
          className=" w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-neutral-200"
          placeholder="Type a new question (e.g. How do I stay safe while operating machinery?)"
          required
        />
        <button
          
          onClick={submitFunction}
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default InputField;
