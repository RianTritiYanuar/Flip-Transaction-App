import React from 'react';
import {View, Text, Button} from 'react-native';

const TransactionDetail: React.FC<{navigation: any}> = ({navigation}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Details Screen</Text>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>
);

export default TransactionDetail;
