import React from 'react';
import {Text, View} from 'react-native';

interface LabelValueProps {
  label: string | number;
  value: string | number;
}

const LabelValue: React.FC<LabelValueProps> = ({label, value}) => {
  return (
    <View>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default LabelValue;
