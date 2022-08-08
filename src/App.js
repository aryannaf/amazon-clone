import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={Home}/> */}
          <Route path="/" component={Header}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
