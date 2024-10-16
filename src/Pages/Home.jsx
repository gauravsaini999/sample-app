import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';

const Home = () => {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    )
}

export default Home
