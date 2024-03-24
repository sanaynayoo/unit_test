import React from 'react';
import {Provider} from 'react-redux';

import {store} from './src/store/root.store';
import AppNavigator from './src/navigations/appNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />;
    </Provider>
  );
};

export default App;
