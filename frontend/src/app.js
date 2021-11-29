import React from 'react';
import Header from './components/header';
import Navigator from './components/navigator';
import Bodysidebar from './components/bodysidebar';
import {Outlet} from 'react-router';
import './index.css';

class App extends React.Component {

    render(){
     return(
        <div className="appcont">
            <Header/>
            <Navigator/>
            
            <div className='bodycont'>
                <Bodysidebar/>
                    <div className='bodymain'>
                        <Outlet/>
                    </div>
                <Bodysidebar/>
            </div>
            
        </div>
     )
    }
    
}

export default App;