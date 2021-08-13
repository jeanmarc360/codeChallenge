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
import {clickMovies} from '../redux/index';
import {get} from '../services/api';
import {URLS} from '../services/url';
import { MovieDetailInterface} from '../redux/types/movies.types';
import {Text} from 'react-native';

interface Props {
    id: number
}
export const Home: FC<Props> = props => {
  const dispatch = useDispatch();
  const detail: MovieDetailInterface = useSelector(
    (state: RootState) => state.movieReducer.detailMovie,
  );
  useEffect(() => {
    //get(URLS.SEARCH_URL("spiderman"));
    dispatch(clickMovies(props.id));
    console.log(detail);
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
      <Text style={{color: '#ffffff', fontSize: 50}}>Screen Detail</Text>
    </View>
  );
};
