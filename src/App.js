import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
