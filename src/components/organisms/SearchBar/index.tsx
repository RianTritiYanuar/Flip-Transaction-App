import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FontAwesomeIcon from '@react-native-vector-icons/fontawesome';
import {Colors} from '../../../styles';
import {findSortByValue} from '../../../helpers';

interface SearchBarProps {
  sort: string;
  value: string;
  onPressSort: () => void;
  onChangeText: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  sort,
  value,
  onPressSort,
  onChangeText,
}) => {
  const currentSort = findSortByValue(sort);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesomeIcon name="search" size={20} color={Colors.gray} />
        <TextInput
          value={value}
          placeholder="Cari nama, bank, atau nominal"
          onChangeText={onChangeText}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity onPress={onPressSort} style={styles.sortContainer}>
        <Text style={styles.sortText}>{currentSort?.label}</Text>
        <FontAwesomeIcon name="chevron-down" size={18} color={Colors.orange} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  searchContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
  textInput: {
    flex: 1,
    paddingVertical: 4,
    marginLeft: 6,
    height: 60,
  },
  sortContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  sortText: {
    marginRight: 4,
    color: Colors.orange,
    fontSize: 12,
    fontWeight: 600,
  },
});
