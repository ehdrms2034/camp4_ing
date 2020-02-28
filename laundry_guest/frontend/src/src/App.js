import React from 'react';

import { MainPage, LoginPage, SignUpPage, LaundryListPage, LaundryDetailPage,  ReviewModifyPage, ProfilePage, OrderListPage, OrderDetailPage, OrderPage, PaymentPage, ReviewPage, ReviewRegisterPage } from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />

        <Route path="/profile/:id" component={ProfilePage} />
        <Route path="/orderlist/:id" component={OrderListPage} />
        <Route path="/orderdetail/:id" component={OrderDetailPage} />
        <Route path="/review" component={ReviewPage} />
        <Route path="/reviewregister/:id" component={ReviewRegisterPage} />
        <Route path="/reviewmodify/:id" component={ReviewModifyPage} />

        <Route exact path="/laundrylist" component={LaundryListPage} />
        <Route exact path="/laundrylist/:id" component={LaundryDetailPage} />
        <Route path="/laundrylist/:id/order" component={OrderPage} />
        <Route path="/laundrylist/:id/payment" component={PaymentPage} />
      </Router>
    </div>
  );
}

export default App;
