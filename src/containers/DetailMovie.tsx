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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#658954'
  },
});

export const DetailMovie = ({ route, navigation }: any) => {
//export const DetailMovie: FC<Props> = props => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const detail: MovieDetailInterface = useSelector(
    (state: RootState) => state.movieReducer.detailMovie,
  );
  useEffect(() => {
    console.log('Screen Detail Movie');
    /*dispatch(clickMovies(id));
    console.log(detail);*/
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{color:'#ffffff',fontSize: 25 }}>Screen detail</Text>
    </View>
  );
};
