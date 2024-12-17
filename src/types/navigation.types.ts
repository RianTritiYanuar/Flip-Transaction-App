import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Transaction} from './transaction.types';

export type RootStackParamList = {
  Transaction: undefined;
  TransactionDetail: {transaction: Transaction};
};

export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
