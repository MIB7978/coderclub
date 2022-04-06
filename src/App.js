import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/login/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
         <Route path="/register">
           <Register/>           
         </Route>
         <Route path="/login">
           <Login/>           
         </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
