import React from 'react';
import HeaderSideBar from './headersidebar';
import HeaderTitle from './headertitle';
import '../index.css';

const Header = (props) => {
    return(
        <div className="headcont">
            <HeaderSideBar/>
            <HeaderTitle/>
            <HeaderSideBar/>
        </div>
    )
}

export default Header;