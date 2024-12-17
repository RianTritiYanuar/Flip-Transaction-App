import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from '@react-native-vector-icons/fontawesome';
import StatusBadge from '../../atoms/StatusBadge';
import BankTransfer from '../../atoms/BankTransfer';
import {Transaction} from '../../../types';
import {formatDate, formatRupiah} from '../../../helpers';
import {Colors} from '../../../styles';

interface TransactionItemProps {
  item: Transaction;
  onPress: () => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({item, onPress}) => {
  const colorStatus = item?.status === 'SUCCESS' ? Colors.green : Colors.orange;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 6,
        marginBottom: 6,
      }}>
      <View style={{flex: 2, flexDirection: 'row'}}>
        <View
          style={{
            width: 6,
            backgroundColor: colorStatus,
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
          }}
        />
        <View style={{paddingLeft: 12, paddingVertical: 12, flex: 1}}>
          <BankTransfer
            senderBank={item?.sender_bank}
            beneficiaryBank={item?.beneficiary_bank}
          />
          <Text>{item?.beneficiary_name?.toUpperCase()}</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text style={{flexShrink: 1}}>{formatRupiah(item?.amount)}</Text>
            <FontAwesomeIcon name="circle" size={8} color="#4F8EF7" />
            <Text style={{flexShrink: 1}}>{formatDate(item?.created_at)}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginRight: 10,
        }}>
        <StatusBadge status={item?.status} />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
