import DBS from './DBS.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Insurance from './components/Insurance';
import CreditCard from './components/CreditCard';
import Promo from './components/Promo';
import About from './components/Product';
import CustomersPage from './components/CustomersPage';
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
          <NavDropdown title="Products">
            <NavDropdown.Item as={Link} to="/insurance">Insurance</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/creditcard">CreditCard</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item as={Link} to="/promo">Promo</NavDropdown.Item>
          </NavDropdown>
        <Nav.Link as={Link} to="/customerspage">Customers</Nav.Link>
        <Nav.Link as={Link} to="/product">Product</Nav.Link>
        <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Category />
          </Route>
          <Route exact path="/insurance">
            <Insurance />
          </Route>
          <Route exact path="/creditcard">
            <CreditCard />
          </Route>
          <Route exact path="/promo">
            <Promo />
          </Route>
          <Route exact path = "/customerspage">
            <CustomersPage />
          </Route>
          <Route path = "/product">
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
