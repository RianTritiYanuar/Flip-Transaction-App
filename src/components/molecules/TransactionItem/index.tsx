import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
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
      style={[styles.container, {borderLeftColor: colorStatus}]}>
      <View style={styles.detailContainer}>
        <View style={styles.transferContainer}>
          <BankTransfer
            senderBank={item?.sender_bank}
            beneficiaryBank={item?.beneficiary_bank}
          />
          <Text style={styles.beneficiaryNameText}>
            {item?.beneficiary_name?.toUpperCase()}
          </Text>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{formatRupiah(item?.amount)}</Text>
            <FontAwesomeIcon
              name="circle"
              size={7}
              color="black"
              style={styles.dotIcon}
            />
            <Text style={styles.amount}>{formatDate(item?.created_at)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <StatusBadge status={item?.status} />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 6,
    marginBottom: 8,
    paddingVertical: 4,
    borderLeftWidth: 8,
  },
  detailContainer: {flex: 7, flexDirection: 'row'},
  transferContainer: {paddingLeft: 12, paddingVertical: 12, flex: 1},
  beneficiaryNameText: {marginBottom: 4, fontSize: 14},
  amountContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  amount: {flexShrink: 1, fontSize: 13},
  dotIcon: {marginHorizontal: 4},
  statusContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10,
  },
});
