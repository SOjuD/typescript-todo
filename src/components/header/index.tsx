import React from 'react';
import TopMenu from "./TopMenu";
import Search from "./Search";

const Header = () => {
    return (
        <header>
            <TopMenu/>
            <Search />
        </header>
    );
};

export default Header;
