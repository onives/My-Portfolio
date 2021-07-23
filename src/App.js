import React, {useState} from 'react';
import './components/css/style.css';

import NavigationBar from './components/NavigationBar';

function App() {
  // const [isdark, setDark] = useState(false);

  // const changeTheme = ()=>{
  //   setDark(!isdark)
  // }

  return (
    <div className='app'>
     <NavigationBar  />
    
    </div>
  );
}

export default App;
