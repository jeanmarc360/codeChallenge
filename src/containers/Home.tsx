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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#254784'
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

   setTimeout(()=>{
     navigation.navigate('DetailMovie',{id:1});
   },2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{color:'#ffffff',fontSize: 25 }}>Screen Home</Text>
    </View>
  );
};
