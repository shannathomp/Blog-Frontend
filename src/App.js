
import './App.css';
import {Route,Switch} from 'react-router-dom'
import About from './components/pages/About';
import Home from './components/pages/Home';
import Landing from './components/pages/Landing';

function App() {
  return (
    <div className="container">
     <h1> Blog-Frontend </h1>
     <Switch>
       <Route exact path='/' component={Landing} />
       <Route  path='/Home' component={Home} />
       <Route  path='/About' component={About} />

     </Switch>
    </div>
  );
}

export default App;
