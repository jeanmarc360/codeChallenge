import React, {useEffect} from 'react';
import {FC} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/reducers/index';
import {fetchMovie, clickMovies} from '../redux/index';
import {get} from '../services/api';
import {URLS} from '../services/url';
import {MovieInterface} from '../redux/types/movies.types';
import {Text} from 'react-native';
import {SearchView} from '../compoments/searchCompoment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#254784',
  },
});

export const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const movies: MovieInterface = useSelector(
    (state: RootState) => state.movieReducer.movies,
  );
  useEffect(() => {
    console.log('Screen Home');
    // dispatch(fetchMovie('avenger'));
    // console.log(movies);

    /*setTimeout(()=>{
     navigation.navigate('DetailMovie',{id:1});
   },2000);*/
  }, []);

  return (
    <View style={styles.container}>
      <SearchView
        onChangeText={text => console.log(text)}
        onClicSearch={() => {
          console.log('clic');
        }}
      />
     {/* <FlatList
        data={this.state.data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => alert('Item pressed!')}>
            <View
              style={{
                flexDirection: 'row',
                padding: 16,
                alignItems: 'center',
              }}>
              <Avatar
                source={{uri: item.picture.thumbnail}}
                size="giant"
                style={{marginRight: 16}}
              />
              <Text
                category="s1"
                style={{
                  color: '#000',
                }}>{`${item.name.first} ${item.name.last}`}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.email}
        ItemSeparatorComponent={this.renderSeparator}
        ListFooterComponent={this.renderFooter}
              />*/}
    </View>
  );
};
