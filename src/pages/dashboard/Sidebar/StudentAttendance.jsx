import React, { useState } from 'react';
import {  IoIosArrowDown, } from 'react-icons/io';
import {isMobile} from 'react-device-detect';
import { FaCalendarAlt, FaClipboardList,FaHandPaper,FaRegCalendarAlt,FaWpforms } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import H3 from '../../../components/textStyle/H3';
import { FaRegCalendar } from 'react-icons/fa6';

const StudentAttendance = () => {
      const [submenuVisible, setSubmenuVisible] = useState(false);
  const [admissionSubmenuVisible, setAdmissionSubmenuVisible] = useState(false);
  const [onlineAdmissionSubmenuVisible, setOnlineAdmissionSubmenuVisible] = useState(false);

  const [sidebarVisible, setSidebarVisible] = useState(!isMobile);
 

 
  const AdmissionDropDown = () => {
    setAdmissionSubmenuVisible(!admissionSubmenuVisible);
  };
  
  const OnlineAdmissionDropDown = () => {
    setOnlineAdmissionSubmenuVisible(!onlineAdmissionSubmenuVisible);
  };
 
  const openSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

    return (
        <div>
            <h3 className='dark:bg-darkModeSidebarTitleBackgroundColor bg-sidebarTitleBackgroundColor dark:text-darkModeSidebarTitleText text-sidebarTitleText text-sm'>Student Attendance</h3>
             
           
              <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
             <FaClipboardList />
              <div className="flex justify-between w-full items-center" onClick={ AdmissionDropDown}>
                <H3 title={'Manage Attendance'}></H3>
                <span className={`text-sm ${admissionSubmenuVisible ? 'rotate-180' : ''}`} id="arrow">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div onClick={openSidebar} className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${admissionSubmenuVisible ? '' : 'hidden'}`} id="submenu">
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <FaHandPaper />
              <H3 title={'Take Student Attendance'}></H3>
              </div>
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <FaCalendarAlt />
              <H3 title={'Attendance Occurrence'}></H3>
              </div>
              
            </div>



            {/* -------------Reports-------------*/}


              <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover dark:hover:bg-darkModeHover">
             <BiSolidReport />
              <div className="flex justify-between w-full items-center" onClick={ OnlineAdmissionDropDown}>
                <H3 title={'Reports'}></H3>
                <span className={`text-sm ${onlineAdmissionSubmenuVisible ? 'rotate-180' : ''}`} id="arrow">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div onClick={openSidebar} className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${onlineAdmissionSubmenuVisible? '' : 'hidden'}`} id="submenu">
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <FaClipboardList />
              <H3 title={'Student wise Attendance'}></H3>
              </div>
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <FaCalendarAlt />
              <H3 title={'Date wise Student  Attendance'}></H3>
              </div>
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <FaRegCalendarAlt />
              <H3 title={'Month wise Student  Attendance'}></H3>
              </div>
              <div className='flex justify-items-start items-center cursor-pointer p-2 hover:bg-hover dark:hover:bg-darkModeHover rounded-md mt-1'>
                <FaRegCalendar />
              <H3 title={'Student  Attendance Blank sheet'}></H3>
              </div>
              
            </div>
          </div>
    );
};

export default StudentAttendance;