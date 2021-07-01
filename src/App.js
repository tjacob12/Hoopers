import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home.js'
import Courts from './components/Courts.js'
import Shop from './components/Shop.js'
import Map from './components/Map.js'
import Video from './components/Video.js'
import './css/App.css';
import BurgerMenu from './components/BurgerMenu.js'

function App(props) {
  return (
    <Map/>
    // <BrowserRouter>
    //   <Route path='/' exact component={Home}/>
    //   <Route path='/Courts' component={Courts}/>
    //   <Route path='/Shop' component={Shop}/>
    //   <Route path='/Video' component={Video}/>
    // </BrowserRouter>
  );
}

export default App;
