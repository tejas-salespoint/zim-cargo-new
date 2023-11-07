import menuIcon from "/src/assets/icons/list_alt.png";
import { MenuListing } from "../data/MenuData";
import { Link, useLocation } from "react-router-dom";
import { Home, HomeOutlined, LocationCity } from "@mui/icons-material";
import { Icon } from "@mui/material";
import React, { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState("");

  // Update the active menu item based on the current URL
  React.useEffect(() => {
    const foundMenuItem = MenuListing.find(
      (item) => item.path === location.pathname
    );
    if (foundMenuItem) {
      setActiveMenuItem(foundMenuItem.path);
    } else {
      setActiveMenuItem("");
    }
  }, [location]);
  return (
    <aside
      id="default-sidebar "
      className=" w-14 fixed top-0  z-50 h-screen pt-16  bg-bg_sidebar "
      aria-label="Sidebar"
    >
      <div className="h-full  overflow-y-auto  ">
        <ul className="font-medium">
          {MenuListing.map((menu) => (
            <div key={menu.id} className="">
              <li
                className={`group ${ activeMenuItem === menu.path ? 'bg-blue-600' : '' } hover:bg-blue-600 px-4 py-4 flex justify-center items-center  h-14 `}
              >
                <Link
                  to={menu.path}
                  className="flex group items-center  text-gray-900 rounded-lg dark:text-white  group"
                >
                  {menu.icon && <menu.icon className="!fill-white" />}{" "}
                  {/* Render the icon if it exists */}
                </Link>

                {/* dropdown */}

                <div
                  id="dropdown"
                  className="z-50  absolute hidden  group-hover:block  left-14 bg-blue-600 divide-y divide-gray-100  w-max "
                >
                  <ul
                    className=" text-sm text-white"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li className="h-14 flex  items-center">
                      <Link
                        to={menu.path}
                        className="block px-4 py-2 text-lg font-semibold  dark:hover:text-white"
                      >
                        {menu.name}
                      </Link>
                    </li>

                    {menu?.submenu?.map((sub) => (
                      <li
                        key={sub.id}
                        className="h-14 flex hover:bg-blue-800 items-center"
                      >
                        <Link
                          to={sub.path}
                          className="block flex justify-center items-center gap-2 px-4 py-2 text-sm  dark:hover:text-white"
                        >
                          <LocationCity />
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
