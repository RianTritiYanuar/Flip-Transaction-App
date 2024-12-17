import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TransactionItem} from '../../molecules';
import {Transaction} from '../../../types';
import {Colors} from '../../../styles';

interface TransactionListProps {
  loading: boolean;
  data: Transaction[] | [];
  onPress: (transaction: Transaction) => void;
}

export const TransactionList: React.FC<TransactionListProps> = ({
  data,
  loading,
  onPress,
}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <TransactionItem
            key={item?.id}
            item={item}
            onPress={() => onPress(item)}
          />
        );
      }}
      ListEmptyComponent={
        loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Colors.orange} />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <Text>No transactions found.</Text>
          </View>
        )
      }
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 10},
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.orange,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
