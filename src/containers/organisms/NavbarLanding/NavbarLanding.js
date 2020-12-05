import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaLaughWink } from 'react-icons/fa'
import { Button } from './../../../components/atoms/btn/btn'
import './NavbarLanding.css'
import { IconContext } from 'react-icons/lib'

const NavbarLanding = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link   to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <FaLaughWink className='navbar-icon' />
                        PSB - Online
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars/> }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/jadwal" className="nav-links" onClick={closeMobileMenu}>
                                Jadwal
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/infomasi' className="nav-links" onClick={closeMobileMenu}>
                                Informasi
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/kontak' className="nav-links" onClick={closeMobileMenu}>
                                Kontak
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/daftar' className="btn-link">
                                    <Button buttonStyle="btn--outline">Daftar</Button>
                                </Link>
                            ): (
                                <Link to='/daftar' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'>
                                                DAFTAR</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default NavbarLanding