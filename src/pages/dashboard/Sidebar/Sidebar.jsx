import React, { useState } from 'react';
import { IoMdFunnel, IoIosApps, IoMdClose, IoIosBookmark, IoIosMail, IoIosChatbubbles, IoIosArrowDown, IoIosLogOut } from 'react-icons/io';
import { Link} from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import { VscGraph } from "react-icons/vsc";
import { FaDoorOpen } from "react-icons/fa6";
const Sidebar = () => {
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(!isMobile);
 

  const dropDown = () => {
    setSubmenuVisible(!submenuVisible);
  };

  const openSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className=''>

    <div className="bg-white dark:bg-darkModeBackgroundColor font-[Poppins] w-full">
      <span className="absolute text-textColor dark:bg-black text-4xl top-5 left-4 cursor-pointer" onClick={openSidebar}>
        
        <IoMdFunnel className="px-2 bg-white dark:bg-darkModeBackgroundColor text-textColor dark:text-darkModeTextColor rounded-md" />
      </span>
      <div className={`sidebar fixed top-0 bottom-0 lg:left-0 ${sidebarVisible ? 'left-0' : 'left-[-300px]'} duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-white dark:bg-darkModeBackgroundColor shadow h-screen`}>
        <div className="text-textColor dark:text-darkModeTextColor  text-xl">
          <div className="p-2.5 mt-1 flex items-center rounded-md ">
            <IoIosApps className="px-2 py-1 bg-white dark:bg-darkModeBackgroundColor rounded-md" />
            <h1 className="text-[15px] ml-3 text-xl text-textColor dark:text-darkModeTextColor font-bold">Tailwindbar</h1>
            <IoMdClose className="ml-20 cursor-pointer lg:hidden" onClick={openSidebar} />
            
          </div>
          <hr className="my-2 text-textColor dark:text-darkModeTextColor" />

          <div>
            <p className='dark:bg-darkModeSidebarTitleBackgroundColor bg-sidebarTitleBackgroundColor dark:text-darkModeSidebarTitleText text-sidebarTitleText text-sm'>General</p>
           <div onClick={openSidebar}>

            <Link to="/dashboard/test">
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
              
              <VscGraph />
              <span className="text-[15px] ml-4 text-textColor dark:text-darkModeTextColor ">Dashboard</span>
            </div>
           </Link>
           </div>
            <p className='dark:bg-darkModeSidebarTitleBackgroundColor bg-sidebarTitleBackgroundColor dark:text-darkModeSidebarTitleText text-sidebarTitleText text-sm'>Admission</p>
            <div onClick={openSidebar} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
              <FaDoorOpen />
              <span className="text-[15px] ml-4 text-textColor dark:text-darkModeTextColor">Manage admission</span>
            </div>
            <hr className="my-4 text-textColor dark:text-darkModeTextColor" />
            <div onClick={openSidebar} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
              <IoIosMail />
              <span className="text-[15px] ml-4 text-textColor dark:text-darkModeTextColor">Messages</span>
            </div>

            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
              <IoIosChatbubbles />
              <div className="flex justify-between w-full items-center" onClick={dropDown}>
                <span className="text-[15px] ml-4 text-textColor dark:text-darkModeTextColor">Chatbox</span>
                <span className={`text-sm ${submenuVisible ? 'rotate-180' : ''}`} id="arrow">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div onClick={openSidebar} className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${submenuVisible ? '' : 'hidden'}`} id="submenu">
              <h1 className="cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1">Social</h1>
              <h1 className="cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1">Personal</h1>
              <h1 className="cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1">Friends</h1>
            </div>
            <div onClick={openSidebar} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
              <IoIosLogOut />
              <span className="text-[15px] ml-4 text-textColor dark:text-darkModeTextColor">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
