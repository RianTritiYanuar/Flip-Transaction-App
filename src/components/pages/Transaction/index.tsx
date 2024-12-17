import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import useFetch from '../../../hooks/useFetch';
import SearchBar from '../../organisms/SearchBar';
import TransactionList from '../../organisms/TransactionList';
import SortModal from '../../organisms/SortModal';
import {
  RootStackParamList,
  Transaction as TransactionType,
} from '../../../types';
import {Colors} from '../../../styles';

type TransactionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Transaction'
>;

interface TransactionProps {
  navigation: TransactionScreenNavigationProp;
}

const Transaction: React.FC<TransactionProps> = ({navigation}) => {
  const {data, loading, error} = useFetch(
    'https://recruitment-test.flip.id/frontend-test',
  );
  const transactions: TransactionType[] = useMemo(
    () => (data ? Object.values(data) : []),
    [data],
  );

  const onPressTransaction = (transaction: TransactionType) => {
    navigation.navigate('TransactionDetail', {transaction: transaction});
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.softOrange}}>
      <SearchBar />
      <TransactionList data={transactions} onPress={onPressTransaction} />
      <SortModal />
    </SafeAreaView>
  );
};

export default Transaction;
