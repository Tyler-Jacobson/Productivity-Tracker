import { Route, Switch } from 'react-router-dom'

import Home from "./Components/Home";
import Nav from "./Components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      
    </div>
  );
}

export default App;
