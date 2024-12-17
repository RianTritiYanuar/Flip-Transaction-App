import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TransactionStatus} from '../../../types';
import {Colors} from '../../../styles';

interface StatusBadgeProps {
  status: TransactionStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({status}) => {
  const color = status === 'SUCCESS' ? 'white' : 'black';
  const backgroundColor = status === 'SUCCESS' ? Colors.green : 'white';
  const colorBorder = status === 'SUCCESS' ? Colors.green : Colors.orange;
  const formattedStatus = status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan';
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundColor, borderColor: colorBorder},
      ]}>
      <Text style={[styles.text, {color: color}]}>{formattedStatus}</Text>
    </View>
  );
};

export default StatusBadge;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  text: {fontSize: 12, fontWeight: 700},
});
