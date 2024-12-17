/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Button,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AntDesignIcon from '@react-native-vector-icons/ant-design';
import FontAwesomeIcon from '@react-native-vector-icons/fontawesome';
import {RadioButton} from 'react-native-paper';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'pink',
        margin: 6,
        paddingHorizontal: 8,
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          backgroundColor: 'lightblue',
          alignItems: 'center',
          paddingRight: 8,
        }}>
        <Text>Icon</Text>
        <TextInput
          placeholder="Cari nama, bank, atau nominal"
          style={{
            flex: 1,
            paddingVertical: 4,
            marginLeft: 6,
          }}
        />
      </View>
      <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
        <Text>Urutkan</Text>
      </TouchableOpacity>
    </View>
  );
};

const TransactionItem = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 6,
        marginBottom: 6,
      }}>
      <View style={{flex: 2, flexDirection: 'row'}}>
        <View
          style={{
            width: 6,
            backgroundColor: 'red',
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
          }}
        />
        <View style={{paddingLeft: 12, paddingVertical: 12, flex: 1}}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text>Permata</Text>
            <AntDesignIcon name="arrow-right" size={20} color="#4F8EF7" />
            <Text>BCA</Text>
          </View>
          <Text>REZA MAULIADI</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text style={{flexShrink: 1}}>Rp1.000.000</Text>
            <FontAwesomeIcon name="circle" size={8} color="#4F8EF7" />
            <Text style={{flexShrink: 1}}>8 April 2024</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginRight: 10,
        }}>
        <Text>Pengecekan</Text>
      </View>
    </TouchableOpacity>
  );
};

const TransactionList = () => {
  return (
    <FlatList
      data={[{id: 1}, {id: 2}]}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => {
        return <TransactionItem />;
      }}
      style={{marginHorizontal: 6}}
    />
  );
};

const SortModal = () => {
  return (
    <Modal
      visible={true}
      transparent
      animationType="slide"
      onRequestClose={() => {}}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <RadioButton.Group onValueChange={() => {}} value={'first'}>
            <View>
              <Text>First</Text>
              <RadioButton.Android value="first" />
            </View>
            <View>
              <Text>Second</Text>
              <RadioButton.Android value="second" />
            </View>
          </RadioButton.Group>
        </View>
      </View>
    </Modal>
  );
};

const Transaction: React.FC<{navigation: any}> = ({navigation}) => (
  <SafeAreaView style={{flex: 1, backgroundColor: 'orange'}}>
    <Header />
    <TransactionList />
    <SortModal />
  </SafeAreaView>
);

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
    alignItems: 'center',
  },
  modalText: {fontSize: 18, marginBottom: 10},
});

export default Transaction;
