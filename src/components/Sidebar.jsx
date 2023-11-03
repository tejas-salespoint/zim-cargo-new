import menuIcon from '/src/assets/icons/list_alt.png'

const Sidebar = () => {
    

    

  return (
    <aside
      id="default-sidebar"
      className=" w-14 h-screen pt-16 fixed bg-bg_sidebar "
      aria-label="Sidebar"
    >
      <div className="h-full  overflow-y-auto  ">
        <ul className="font-medium">
          <li className="hover:bg-blue-600 px-4 py-4 flex justify-center items-center  h-14 ">
            <a
              href="#"
              className="flex items-center  text-gray-900 rounded-lg dark:text-white  group"
            >
             <img className='h-5 w-5' src={menuIcon} alt='menu' />
            </a>
          </li>
          <li className="bg-blue-600 px-4 py-4 flex justify-center items-center  h-14 ">
            <a
              href="#"
              className="flex items-center  text-gray-900 rounded-lg dark:text-white  group"
            >
             <img className='h-5 w-5' src={menuIcon} alt='menu' />
            </a>
          </li>
          
        
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
