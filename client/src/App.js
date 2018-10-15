import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import RosterContainer from "./pages/CreateRoster";
const App=()=>(
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/"component={Home}/>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/signUp"component={SignUp} />
        <Route exact path="/signIn"component={SignIn}/>
        <Route exact path="/newRoster"component={RosterContainer}/>
        <Route component={NoMatch}/>
        
      </Switch>
    </div>
  </Router>
);


// class App extends Component {
//   state = {
//     response: ''
//   };

//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();

//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   };
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           {this.state.response}
//         </p>
//       </div>
//     );
//   }
// }

export default App;
