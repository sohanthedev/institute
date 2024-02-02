import React, { useState } from 'react';
import { IoMdFunnel, IoIosApps, IoMdClose, IoIosBookmark, IoIosMail, IoIosChatbubbles, IoIosArrowDown, IoIosLogOut } from 'react-icons/io';
import { Link} from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import { VscGraph } from "react-icons/vsc";
import { FaClipboardList, FaUserGraduate,FaWpforms,FaListOl, FaUsers } from "react-icons/fa";
import { FaUsersBetweenLines,FaClipboardUser } from "react-icons/fa6";
import { BsPersonLinesFill } from "react-icons/bs";
import { LuNewspaper } from "react-icons/lu";
import { PiStudentFill,PiUsersFourBold } from "react-icons/pi";
import { TbReport } from "react-icons/tb";
import { GiRelationshipBounds } from "react-icons/gi";
import H3 from '../../../components/textStyle/H3';
import StudentAttendance from './StudentAttendance';

const Sidebar = () => {
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [admissionSubmenuVisible, setAdmissionSubmenuVisible] = useState(false);
  const [onlineAdmissionSubmenuVisible, setOnlineAdmissionSubmenuVisible] = useState(false);
  const [manageStudent, setManageStudent] = useState(false);
  const [reports, setReports] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(!isMobile);
 

  const dropDown = () => {
    setSubmenuVisible(!submenuVisible);
  };
  const AdmissionDropDown = () => {
    setAdmissionSubmenuVisible(!admissionSubmenuVisible);
  };
  
  const OnlineAdmissionDropDown = () => {
    setOnlineAdmissionSubmenuVisible(!onlineAdmissionSubmenuVisible);
  };
  const manageStudentsdropDown = () => {
    setManageStudent(!manageStudent);
  };
  const reportsDropDown = () => {
    setReports(!reports);
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
            <h3 className='dark:bg-darkModeSidebarTitleBackgroundColor bg-sidebarTitleBackgroundColor dark:text-darkModeSidebarTitleText text-sidebarTitleText text-sm'>General</h3>

            {/* dashboard */}
           <div onClick={openSidebar}>

            <Link to="/dashboard/test">
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
              
              <VscGraph />
              <H3 title={'Dashboard'}></H3>
            </div>
           </Link>
           </div>
            {/* admission */}

          <div>
            <h3 className='dark:bg-darkModeSidebarTitleBackgroundColor bg-sidebarTitleBackgroundColor dark:text-darkModeSidebarTitleText text-sidebarTitleText text-sm'>Admission</h3>
             
           
              <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
             <FaClipboardList />
              <div className="flex justify-between w-full items-center" onClick={ AdmissionDropDown}>
                <H3 title={'Manage Admission'}></H3>
                <span className={`text-sm ${admissionSubmenuVisible ? 'rotate-180' : ''}`} id="arrow">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div onClick={openSidebar} className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${admissionSubmenuVisible ? '' : 'hidden'}`} id="submenu">
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <FaUserGraduate />
              <H3 title={'Admit Student'}></H3>
              </div>
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <FaUsersBetweenLines />
              <H3 title={'Admit Bulk Students'}></H3>
              </div>
              
            </div>



            {/* online Admission */}


              <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
             <BsPersonLinesFill />
              <div className="flex justify-between w-full items-center" onClick={ OnlineAdmissionDropDown}>
                <H3 title={'Online Admission'}></H3>
                <span className={`text-sm ${onlineAdmissionSubmenuVisible ? 'rotate-180' : ''}`} id="arrow">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div onClick={openSidebar} className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${onlineAdmissionSubmenuVisible? '' : 'hidden'}`} id="submenu">
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <LuNewspaper />
              <H3 title={'Setup Admission form'}></H3>
              </div>
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <FaWpforms />
              <H3 title={'Online Application'}></H3>
              </div>
              
            </div>
          </div>


          {/*----------------------- students------------------ */}

          
          <div>
            <h3 className='dark:bg-darkModeSidebarTitleBackgroundColor bg-sidebarTitleBackgroundColor dark:text-darkModeSidebarTitleText text-sidebarTitleText text-sm'>Students</h3>
              <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">

              <FaListOl />
              <H3 title={'List of Students'}></H3>
            </div>

              <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
             <PiStudentFill />
              <div className="flex justify-between w-full items-center" onClick={ manageStudentsdropDown}>
                <H3 title={'Manage Student'}></H3>
                <span className={`text-sm ${manageStudent ? 'rotate-180' : ''}`} id="arrow">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div onClick={openSidebar} className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${manageStudent ? '' : 'hidden'}`} id="submenu">
              <div className='flex justify-items-start items-center  cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <FaClipboardUser />
              <H3 title={'Students Details'}></H3>
              </div>
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <PiUsersFourBold />
              <H3 title={'Update Bulk Students'}></H3>
              </div>
              
            </div>



            


              <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
             <TbReport />
              <div className="flex justify-between w-full items-center" onClick={ reportsDropDown}>
                <H3 title={'Reports'}></H3>
                <span className={`text-sm ${reports ? 'rotate-180' : ''}`} id="arrow">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div onClick={openSidebar} className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${reports? '' : 'hidden'}`} id="submenu">
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <GiRelationshipBounds />
              <H3 title={"Student's Relative"}></H3>
              </div>
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <FaUsers />
              <H3 title={'Student Record'}></H3>
              </div>
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <FaUsers />
              <H3 title={'Board Results History'}></H3>
              </div>
              
            </div>
          </div>

          {/* ----------------------students Attendance--------------------- */}
          <StudentAttendance></StudentAttendance>
            <hr className="my-4 text-textColor dark:text-darkModeTextColor" />

            
            <div onClick={openSidebar} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
              <IoIosMail />
              <span className="text-[15px] ml-4 text-textColor dark:text-darkModeTextColor">Messages</span>
            </div>

          <div>
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
          </div>

          
          <div>
              <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
              <IoIosChatbubbles />
              <div className="flex justify-between w-full items-center" onClick={ AdmissionDropDown}>
                <span className="text-[15px] ml-4 text-textColor dark:text-darkModeTextColor">Admission</span>
                <span className={`text-sm ${admissionSubmenuVisible ? 'rotate-180' : ''}`} id="arrow">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div onClick={openSidebar} className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${admissionSubmenuVisible ? '' : 'hidden'}`} id="submenu">
              <h1 className="cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1">Social</h1>
              <h1 className="cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1">Personal</h1>
              <h1 className="cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1">Friends</h1>
            </div>
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
