import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import Home from "./pages/Home/Home";

import Authenticate from "./pages/authenticate/Authenticate";
import Activate from "./pages/activate/Activate";
import Rooms from "./pages/rooms/Rooms";

const isAuth = false;
const user = {
  activated:true
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Guestroute path="/" exact>
            <Home />
          </Guestroute>
          <Guestroute path="/authenticate" exact>
            <Authenticate />
          </Guestroute>
          <Semiprotected path="/activate">
            <Activate/>
          </Semiprotected>
          <Protected path="/rooms">
           <Rooms/>
          </Protected>
        </Switch>
      </BrowserRouter>
    </>
  );
}

const Guestroute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth ? (
          <Redirect
            to={{
              pathname: "/rooms",
              state: location,
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

const Semiprotected = ({children,...rest})=>{

  return (
   <Route {...rest}
   render={({location})=>{
      return (
        !isAuth?(
          <Redirect to = {{
            pathname : '/',
            state : location 
          }}/>
        ): isAuth && !user.activated?(
          children
        ):(
          <Redirect to = {{
            pathname : '/rooms',
            state : location 
          }}/>
        )
      )
   }}>

   </Route> 

  );
}
const Protected = ({children,...rest})=>{

  return (
   <Route {...rest}
   render={({location})=>{
      return (
        !isAuth?(
          <Redirect to = {{
            pathname : '/',
            state : location 
          }}/>
        ): isAuth && !user.activated?(
          <Redirect to = {{
            pathname : '/activate',
            state : location 
          }}/>
        ):(
          children
        )
      )
   }}>

   </Route> 

  );
}

export default App;
