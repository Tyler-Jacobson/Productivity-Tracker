import { Route, Switch } from 'react-router-dom'

import Home from "./Components/Home";
import About from "./Components/About";
import Nav from "./Components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
      
    </div>
  );
}

export default App;
