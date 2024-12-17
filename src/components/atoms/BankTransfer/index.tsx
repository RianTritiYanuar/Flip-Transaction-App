import React from 'react';
import {View, Text} from 'react-native';
import FontAwesomeIcon from '@react-native-vector-icons/fontawesome';

interface BankTransferProps {
  senderBank: string;
  beneficiaryBank: string;
}

const BankTransfer: React.FC<BankTransferProps> = ({
  senderBank,
  beneficiaryBank,
}) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <Text>{senderBank?.toUpperCase()}</Text>
      <FontAwesomeIcon name="arrow-right" size={20} color="#4F8EF7" />
      <Text>{beneficiaryBank?.toUpperCase()}</Text>
    </View>
  );
};

export default BankTransfer;
