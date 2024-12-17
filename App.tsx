/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import AppNavigation from './src/navigation/AppNavigation';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <AppNavigation />
    </PaperProvider>
  );
}

export default App;
