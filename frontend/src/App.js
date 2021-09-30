import DBS from './DBS.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Checkout from './components/Checkout';
import About from './components/Product';
import Login from './components/Login';
import { Category } from './components/Category';


const App = () => {
  return (
    <Router>
    <div className="App">
      <Navbar bg="dark" variant="dark"
      sticky = "top">
        <Navbar.Brand>
          <img src = {DBS} width="60px" height="40px" />{' '}
        </Navbar.Brand>

        <Nav>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/product">Product</Nav.Link>
        <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
        </Nav>
      </Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Category />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path = "/product">
            <About />
          </Route>
          <Route exact path = "/login">
            <Login />
          </Route>
          <Route path= "/category">
            <Category/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
