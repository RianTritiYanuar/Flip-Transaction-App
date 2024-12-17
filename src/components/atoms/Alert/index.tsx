import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {Colors} from '../../../styles';

interface AlertProps {
  visible: boolean;
  message: string;
  onDismiss: (value: boolean) => void;
}

export const Alert: React.FC<AlertProps> = ({visible, onDismiss, message}) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={() => onDismiss(false)}
      duration={2000}
      action={{
        label: 'OK',
        labelStyle: styles.snackBarText,
      }}
      style={styles.snackBar}>
      <Text style={styles.snackBarText}>{message}</Text>
    </Snackbar>
  );
};

const styles = StyleSheet.create({
  snackBar: {backgroundColor: Colors.green},
  snackBarText: {color: 'white'},
});
