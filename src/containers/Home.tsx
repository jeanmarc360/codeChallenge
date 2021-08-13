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

interface Props {}
export const Home: FC<Props> = props => {
  const dispatch = useDispatch();
  const movies: MovieInterface = useSelector(
    (state: RootState) => state.movieReducer.movies,
  );
  useEffect(() => {
    //get(URLS.SEARCH_URL("spiderman"));
    dispatch(fetchMovie('avenger'));
    console.log(movies);
  }, []);

  return (
    <View
      style={{
        flexGrow: 1,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      />
      <Text style={{color: '#ffffff', fontSize: 50}}>Screen Home</Text>
    </View>
  );
};
