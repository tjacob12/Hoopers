import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home.js'
import Courts from './components/Courts.js'
import Shop from './components/Shop.js'
import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}/>
      <Route path='/Courts' component={Courts}/>
      <Route path='/Shop' component={Shop}/>
    </BrowserRouter>
  );
}

export default App;
