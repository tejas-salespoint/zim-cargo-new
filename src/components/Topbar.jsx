import secondary_logo from "/src/assets/secondary_logo.png";
import main_logo from "/src/assets/primary_logo.png";


const Topbar = () => {
  return (
    <div className="w-full fixed top-0  z-50 h-16 shadow-xl bg-bg_topbar flex justify-start items-center ">
      <div className="flex  gap-4 justify-start items-center mx-5 divide-x divide-x-2">
        <img className="h-12 w-12" src={secondary_logo} alt="secondary logo" />
        {/* <div className="w-1 bg-white" /> */}
        <div className="flex justify-center items-center gap-2">
          <span className="font-semibold text-white text-xl">The</span>
          <img className="h-8 w-8" src={main_logo} alt="secondary logo" />
          <span className="font-semibold text-white text-xl">Factor</span>
        </div>
      </div>
      
    </div>
  );
};

export default Topbar;
