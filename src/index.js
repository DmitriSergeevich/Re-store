import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorBoundry from './components/error-boundry/error-boundry';
import { BookstoreServiceProvider } from './components/bookstore-service-context/bookstore-service-context';
import { store } from './store';
import BookstoreService from './services/bookstore-service';
import { BrowserRouter as Router } from 'react-router-dom';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App/>
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
  , document.getElementById('root'));