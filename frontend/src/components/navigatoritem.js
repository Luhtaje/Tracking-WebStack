import React from 'react';
import '../index.css';

const NavigatorItem = (props) => {
    return(
        <div className="navitem">
            <div className="navigatorText">
                <button>{props.name}</button>
            </div>
        </div>
    )
}

export default NavigatorItem;