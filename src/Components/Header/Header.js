import React from 'react';
import Jump from 'react-reveal/Jump';
import Typical from 'react-typical'
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import './Header.css'
const Header = () => {
    const expertise=["I am ",2000, "I am Frontend web Developer",5000, "I am Problem  Solver",500, "I am curious Learner",5000]
    return (
        <div className="main-header-container">
            <HeaderNavbar></HeaderNavbar>
            <div className='header-container mt-5'>
                <div className="header-title">
                    <Jump >
                        <h1 className="my-name">Md.Tareq</h1>
                    </Jump>
                    <Typical className="text-white my-expertise"
                        steps={expertise}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;