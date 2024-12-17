import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import AntDesignIcon from '@react-native-vector-icons/ant-design';
import {Snackbar} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import BankTransfer from '../../atoms/BankTransfer';
import LabelValue from '../../atoms/LabelValue';
import {RootStackParamList} from '../../../types';
import {formatDate} from '../../../helpers';
import {Colors} from '../../../styles';

type TransactionDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TransactionDetail'
>;
type TransactionDetailRouteProp = RouteProp<
  RootStackParamList,
  'TransactionDetail'
>;

interface TransactionDetailProps {
  navigation: TransactionDetailScreenNavigationProp;
  route: TransactionDetailRouteProp;
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({
  navigation,
  route,
}) => {
  const {transaction} = route.params;
  const [visible, setVisible] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setString(transaction?.id);
    setVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={2000}
        action={{
          label: 'OK',
          labelStyle: styles.snackBarText,
        }}
        style={styles.snackBar}>
        <Text style={styles.snackBarText}>Berhasil menyalin</Text>
      </Snackbar>
      <View>
        <View style={styles.IDContainer}>
          <Text style={styles.fontWeight600}>ID TRANSAKSI: #</Text>
          <Text style={styles.fontWeight600}>{transaction?.id}</Text>
          <TouchableOpacity onPress={copyToClipboard}>
            <AntDesignIcon
              name="copy"
              size={20}
              color={Colors.orange}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.fontWeight600}>DETAIL TRANSAKSI</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.closeText}>Tutup</Text>
          </TouchableOpacity>
        </View>
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
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.softOrange},
  snackBar: {backgroundColor: Colors.green},
  snackBarText: {color: 'white'},
  IDContainer: {
    flexDirection: 'row',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#D9EAFD',
    backgroundColor: 'white',
  },
  fontWeight600: {fontWeight: 600},
  icon: {marginLeft: 6},
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#D4EBF8',
    backgroundColor: 'white',
  },
  closeText: {color: Colors.orange, fontWeight: 700},
  transactionContainer: {padding: 18, backgroundColor: 'white'},
  bankTransferContainer: {marginBottom: 16},
  rowLabelValue: {flexDirection: 'row', marginBottom: 16},
  flex2: {flex: 2},
  flex3: {flex: 3},
});
