import React from 'react';
import {FlatList} from 'react-native';
import TransactionItem from '../../molecules/TransactionItem';
import {Transaction} from '../../../types';

interface TransactionListProps {
  data: Transaction[] | [];
  onPress: () => void;
}

const TransactionList: React.FC<TransactionListProps> = ({data, onPress}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return <TransactionItem key={item?.id} item={item} onPress={onPress} />;
      }}
      style={{marginHorizontal: 6}}
    />
  );
};

export default TransactionList;
