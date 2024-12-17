import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TransactionDetail from '../components/pages/TransactionDetail';
import Transaction from '../components/pages/Transaction';

type RootStackParamList = {
  Transaction: undefined;
  TransactionDetail: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;