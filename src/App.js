import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
