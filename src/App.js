import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/Home";
import Login from "./components/Login";
import SimpleInterest from "./components/SimpleInterest";

function App() {
  return (
    <BrowserRouter>
     <ToastContainer></ToastContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SimpleInterest" component={SimpleInterest} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
