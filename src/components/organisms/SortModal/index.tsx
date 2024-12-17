import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Colors} from '../../../styles';
import {transactionSort} from '../../../helpers';
interface SortModalProps {
  visible: boolean;
  sort: string;
  onPress: (e: string) => void;
}

export const SortModal: React.FC<SortModalProps> = ({
  visible,
  sort,
  onPress,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <RadioButton.Group
            onValueChange={(e: string) => onPress(e)}
            value={sort}>
            {transactionSort.map(item => {
              return (
                <TouchableOpacity
                  key={item?.value}
                  onPress={() => onPress(item?.value)}
                  style={styles.radioContainer}>
                  <RadioButton.Android
                    value={item?.value}
                    color={Colors.orange}
                    uncheckedColor={Colors.orange}
                  />
                  <Text>{item?.label}</Text>
                </TouchableOpacity>
              );
            })}
          </RadioButton.Group>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
