import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BankTransfer, LabelValue} from '../../atoms';
import {Transaction} from '../../../types';
import {formatDate} from '../../../helpers';

interface TransactionDetailSectionProps {
  transaction: Transaction;
}

export const TransactionDetailSection: React.FC<
  TransactionDetailSectionProps
> = ({transaction}) => {
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.bankTransferContainer}>
        <BankTransfer
          senderBank={transaction?.sender_bank}
          beneficiaryBank={transaction?.beneficiary_bank}
        />
      </View>
      <View style={styles.rowLabelValue}>
        <View style={styles.flex3}>
          <LabelValue
            label={transaction?.beneficiary_name}
            value={transaction?.account_number}
          />
        </View>
        <View style={styles.flex2}>
          <LabelValue label="Nominal" value={transaction?.amount} />
        </View>
      </View>
      <View style={styles.rowLabelValue}>
        <View style={styles.flex3}>
          <LabelValue label="Berita Transfer" value={transaction?.remark} />
        </View>
        <View style={styles.flex2}>
          <LabelValue label="Kode Unik" value={transaction?.unique_code} />
        </View>
      </View>
      <View style={styles.rowLabelValue}>
        <LabelValue
          label="Waktu Dibuat"
          value={formatDate(transaction?.created_at)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionContainer: {padding: 18, backgroundColor: 'white'},
  bankTransferContainer: {marginBottom: 16},
  rowLabelValue: {flexDirection: 'row', marginBottom: 16},
  flex2: {flex: 2},
  flex3: {flex: 3},
});
