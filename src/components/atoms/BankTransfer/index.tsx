import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesomeIcon from '@react-native-vector-icons/fontawesome';

interface BankTransferProps {
  senderBank: string;
  beneficiaryBank: string;
}

export const BankTransfer: React.FC<BankTransferProps> = ({
  senderBank,
  beneficiaryBank,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{senderBank?.toUpperCase()}</Text>
      <FontAwesomeIcon
        name="arrow-right"
        size={14}
        color="black"
        style={styles.icon}
      />
      <Text style={styles.text}>{beneficiaryBank?.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  icon: {marginHorizontal: 6},
  text: {fontWeight: '700', fontSize: 16},
});
