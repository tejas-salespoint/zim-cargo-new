

const DotLoader = () => {
  return (
    <span className="flex space-x-1   ">
      <span className="sr-only">Loading...</span>
      <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
    </span>
  );
};

export default DotLoader;
