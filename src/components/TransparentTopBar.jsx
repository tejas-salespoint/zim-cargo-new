
const TransparentTopBar = () => {
  return (
    <div className="h-14  opacity-40 bg-black flex justify-between items-center px-4">
        <div className="text-white text-lg ">
            Azure OpenAi + Congnitive Search
        </div>
        <div className="flex gap-4 justify-center items-center">
            <div className="text-white text-lg  ">
                Reset Demo
            </div>
            <div className="text-white text-lg  ">
                Chat
            </div>
            <div className="text-white text-lg  ">
                Developer Settings
            </div>
        </div>
    </div>
  )
}

export default TransparentTopBar

