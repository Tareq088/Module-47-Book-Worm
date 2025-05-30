import React from 'react';
import Navbar from '../../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar ></Navbar>
            <div className='sm:container mx-auto p-2'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;