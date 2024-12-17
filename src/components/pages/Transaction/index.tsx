import React, {useMemo, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFetch} from '../../../hooks';
import {SearchBar, TransactionList, SortModal} from '../../organisms';
import {
  RootStackParamList,
  Transaction as TransactionType,
} from '../../../types';
import {Colors} from '../../../styles';
import {filteringAndSortingTransactions} from '../../../helpers';

type TransactionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Transaction'
>;

interface TransactionProps {
  navigation: TransactionScreenNavigationProp;
}

export const Transaction: React.FC<TransactionProps> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('default');

  const {data, loading} = useFetch(
    'https://recruitment-test.flip.id/frontend-test',
  );

  const transactions: TransactionType[] = useMemo(
    () => (data ? Object.values(data) : []),
    [data],
  );

  const filteredAndSortedTransactions = useMemo(() => {
    return filteringAndSortingTransactions(transactions, query, sort);
  }, [transactions, sort, query]);

  const onPressTransaction = (transaction: TransactionType) => {
    navigation.navigate('TransactionDetail', {transaction: transaction});
  };

  const onPressSortItem = (value: string) => {
    setSort(value);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        sort={sort}
        value={query}
        onChangeText={setQuery}
        onPressSort={() => setModalVisible(true)}
      />
      <TransactionList
        loading={loading}
        data={filteredAndSortedTransactions}
        onPress={onPressTransaction}
      />
      <SortModal visible={modalVisible} sort={sort} onPress={onPressSortItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.softOrange},
});
