import React, {useState} from 'react';
import {Image} from 'react-native';
import {TextInput} from 'react-native';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {images} from '../../common/image/images';
interface searchProps {
  onChangeText: (text: String) => String;
  onKeyPressSearch: () => void;
}

export const SearchView: React.FC<
  searchProps & {onChangeText: () => string} & {onKeyPressSearch: () => void}
> = ({onChangeText, onKeyPressSearch}) => {
  const [query, setQuery] = useState('');

  const handlerTextChange = (text: string) => {
    setQuery(text);
    onChangeText(text);
  };
  const resetImput = () => {
    setQuery('');
    onChangeText('');
  };
  const handleKeyPress = () => {
    onKeyPressSearch();
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          numberOfLines={1}
          returnKeyType="done"
          value={query}
          onChangeText={queryText => handlerTextChange(queryText)}
          style={styles.imput}
          placeholder="Enter the movie's title"
          onSubmitEditing={handleKeyPress}
        />
      </View>
      <TouchableOpacity style={styles.bt_search} onPress={() => resetImput()}>
        <Image style={styles.text_bt} source={images.error} />
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
    backgroundColor: 'transparent',
    margin: 10,
  },
  bt_search: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    margin: 5,
  },
  search: {
    width: 300,
    maxWidth: 300,
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 10,
    margin: 0,
  },
  imput: {backgroundColor: '#ffffff', paddingHorizontal: 0},
  text_bt: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
