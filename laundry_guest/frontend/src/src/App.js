import React from 'react';
import { MainPage, LoginPage, SignUpPage, LaundryListPage, ProfilePage } from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/laundrylist" component={LaundryListPage} />
      </Router>
    </div>
  );
}

export default App;
