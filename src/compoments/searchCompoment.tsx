import React, {useState} from 'react';
import { Text } from 'react-native';
import {TextInput} from 'react-native';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

interface searchProps {
  onChangeText: (text: String) => String;
  onClicSearch: () => void;
}

export const SearchView: React.FC<
  searchProps & {onChangeText: () => string} & {onClicSearch: () => void}
> = ({onChangeText, onClicSearch}) => {
  const [query, setQuery] = useState('');

  const handlerTextChange = (text: string) => {
    setQuery(text);
    onChangeText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handlerTextChange(queryText)}
          placeholder="Search"
          style={styles.imput}
        />
      </View>
      <TouchableOpacity style={styles.bt_search} onPress={() => onClicSearch()}>
        <Text style={styles.text_bt}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#547856',
  },
  bt_search: {
    alignItems: 'center',
    justifyContent:'center',
    width: 40,
    height: 40,
    margin:5,
    backgroundColor: '#254895',
  },
  search: {
    width:300,
    maxWidth:300,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    margin:10
  },
  imput: {backgroundColor: '#fff', paddingHorizontal: 20},
  text_bt:{
      textAlign: 'center',
  }
});
