import React from 'react';
import {View, Text} from 'react-native';
import {TransactionStatus} from '../../../types';

interface StatusBadgeProps {
  status: TransactionStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({status}) => {
  return (
    <View>
      <Text>{status}</Text>
    </View>
  );
};

export default StatusBadge;
