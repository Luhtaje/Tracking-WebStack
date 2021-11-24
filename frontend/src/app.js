import React from 'react';
import Header from './components/header';
import Navigator from './components/navigator';
import Body from './components/body';
import './index.css';

class App extends React.Component {

    render(){
     return(
        <div className="appcont">
            <Header/>
            <Navigator/>
            <Body/>
        </div>
     )
    }
    
}

export default App;