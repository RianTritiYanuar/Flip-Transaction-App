import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface LabelValueProps {
  label: string | number;
  value: string | number;
}

const LabelValue: React.FC<LabelValueProps> = ({label, value}) => {
  return (
    <View>
      <Text style={styles.label}>{label?.toString()?.toUpperCase()}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default LabelValue;

const styles = StyleSheet.create({
  label: {marginBottom: 4, fontWeight: 600},
});
