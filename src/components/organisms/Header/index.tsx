import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Header: React.FC = () => {
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

export default Header;
