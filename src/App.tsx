import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import { store } from './store/index';

const App: React.FC = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

export default App;
