
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Header from '../../share/Header';

const Dashboard = () => {
    return (
         <section className=''>
            <Header></Header>
            <div className='flex gap-1'>
            <div className='lg:w-4/12  z-[100] '>
            <Sidebar></Sidebar>
            </div>
            <div className='w-full px-2 py-4 lg:mr-5 lg:ml-0 m-5 dark:bg-darkModeBackgroundColor bg-backgroundColor'>
            <Outlet></Outlet>
            </div>
        </div>
         </section>
    );
};

export default Dashboard;