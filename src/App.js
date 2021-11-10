import './App.css';   
import Header from './head/Header';
import AccountDetail from './account/AccountDetail';
import Dashboard from './dashboard/Dashboard';
import Login from './account/Login'
import Register from './account/Register'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/Account' component={AccountDetail}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Registr' component={Register}/>
        <Route path='/Register' component={Register}/>
      </Switch>    
    </div>
    </BrowserRouter>
  );
}

export default App;
