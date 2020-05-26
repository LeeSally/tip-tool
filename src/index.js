import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker'; 
import TipBox from './TipBox';

ReactDOM.render(
  <React.StrictMode>

    <TipBox title="Click Hi" value='Hello World!' tiptype='top' showEvent='click'/>   
    <TipBox title="Click Me" value='Hi, this is Sally!' tiptype='right' showEvent='click'/>   
    <TipBox title="Hover:great" value='Great job, well done!' tiptype='left' showEvent='hover'/>  
    <TipBox title="Hover:yes" value='Yes! I will do it' tiptype='bottom' showEvent='hover'/>  

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
