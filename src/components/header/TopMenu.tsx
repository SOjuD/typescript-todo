import React from 'react';
import logoPath from '../../images/logo.png'

const TopMenu = () => {
    return (
        <div className='header-menu'>
            <a href="/">
                <img src={logoPath} alt="logo"/>
            </a>
            <button>+ Add Movie</button>
            </div>
    );
};

export default TopMenu;
