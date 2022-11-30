import React from 'react';
import {Provider} from 'react-redux';
import StackNavigation from './src/navigation/MyStack';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;
