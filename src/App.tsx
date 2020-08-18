import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import { store } from './store/index';
// import io from 'socket.io-client';

// const socket = io(':5000');

const App: React.FC = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

export default App;
