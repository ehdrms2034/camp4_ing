import React from 'react';
import {
  LoginPage, ProfilePage, SignUpPage, ProductRegistrationPage,
  ReviewPage, HourlySalesPage, OrderPage, ChatListPage
} from "./pages";
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={LoginPage}/>
        <Route path="/signup" component={SignUpPage}/>
        <Route path="/profile" component={ProfilePage}/>
        <Route path="/productRegistration" component={ProductRegistrationPage}/>
        <Route path={"/review"} component={ReviewPage}/>
        <Route path={"/hourlySales"} component={HourlySalesPage}/>
        <Route path={"/orderManagement"} component={OrderPage}/>
        <Route path={"/chatList"} component={ChatListPage}/>
      </Router>
    </div>
  );
}

export default App;
