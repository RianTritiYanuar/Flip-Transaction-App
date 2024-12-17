import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import AntDesignIcon from '@react-native-vector-icons/ant-design';
import {Snackbar} from 'react-native-paper';
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
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.softOrange}}>
      <Snackbar
        visible={false}
        // onDismiss={onDismissSnackbar}
        duration={2000} // Duration in milliseconds
        action={{
          label: 'OK',
          onPress: () => {
            console.log('Snackbar action pressed');
          },
          labelStyle: {color: 'white'},
        }}
        style={{backgroundColor: Colors.green, color: 'red'}}>
        <Text style={{color: 'white'}}>Berhasil menyalin</Text>
      </Snackbar>
      <View style={{paddingHorizontal: 18}}>
        <View style={{flexDirection: 'row'}}>
          <Text>ID TRANSAKSI: #</Text>
          <Text>{transaction?.id}</Text>
          <TouchableOpacity>
            <AntDesignIcon name="copy" size={20} color={Colors.orange} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Detail Transaksi</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Tutup</Text>
          </TouchableOpacity>
        </View>
        <BankTransfer
          senderBank={transaction?.sender_bank}
          beneficiaryBank={transaction?.beneficiary_bank}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <LabelValue
              label={transaction?.beneficiary_name}
              value={transaction?.account_number}
            />
          </View>
          <View style={{flex: 2}}>
            <LabelValue label="Nominal" value={transaction?.amount} />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <LabelValue label="Berita Transfer" value={transaction?.remark} />
          </View>
          <View style={{flex: 2}}>
            <LabelValue label="Kode Unik" value={transaction?.unique_code} />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <LabelValue
            label="Waktu Dibuat"
            value={formatDate(transaction?.created_at)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetail;
