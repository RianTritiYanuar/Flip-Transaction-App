import React from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';

const SortModal = () => {
  return (
    <Modal
      visible={false}
      transparent
      animationType="slide"
      onRequestClose={() => {}}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <RadioButton.Group onValueChange={() => {}} value={'first'}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton.Android value="first" />
              <Text>First</Text>
            </View>
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
  modalText: {fontSize: 18, marginBottom: 10},
});

export default SortModal;
