import React from 'react';
import Bodysidebar from './bodysidebar';
import Bodymain from './bodymain';
import '../index.css'

class Body extends React.Component {

    render(){
        return(
            <div className="bodycont">
                <Bodysidebar/>
                <Bodymain/>
                <Bodysidebar/>
            </div>
        )
    }
}
export default Body;