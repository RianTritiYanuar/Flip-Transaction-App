import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AntDesignIcon from '@react-native-vector-icons/ant-design';

const SearchBar: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 6,
        paddingHorizontal: 8,
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 8,
        }}>
        <AntDesignIcon name="arrow-right" size={20} color="#4F8EF7" />
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

export default SearchBar;

const styles = StyleSheet.create({});
