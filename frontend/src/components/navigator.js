import React from 'react';
import NavigatorItem from './navigatoritem';
import '../index.css';


class Navigator extends React.Component {

    render(){
        return(
            <div className="navcont">
                <NavigatorItem name="Home" />
                <NavigatorItem name="Map" />
                <NavigatorItem name="Groups" />
                <NavigatorItem name="About" />
            </div>
        )
    }
}

export default Navigator;