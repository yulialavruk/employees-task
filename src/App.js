import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Home } from "./pages/Home";
import { Employees } from "./pages/Employees";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Link to="/">Home</Link>
            <Link to="/employees">Employees</Link>
          </Toolbar>
        </AppBar>
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
