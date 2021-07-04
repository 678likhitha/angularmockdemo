import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeList from './employeeList';
class App extends Component {
	render() {
		return (
			<Router>
				      <Switch>
        <Route exact path="/" component={LoginForm} />
		<Route exact path="/dashbord" component={EmployeeList}/>
		</Switch>
		</Router>
		);
	}
}

export default App;
