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
import {TransactionDetailSection} from '../../organisms';
import {RootStackParamList} from '../../../types';
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

export const TransactionDetail: React.FC<TransactionDetailProps> = ({
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
        <TransactionDetailSection transaction={transaction} />
      </View>
    </SafeAreaView>
  );
};

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
});
