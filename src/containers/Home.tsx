import React, {useEffect} from 'react';
import {FC} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../redux/reducers/index';
import {fetchMovie , clickMovies} from '../redux/index';

interface Props {}
export const Home: FC<Props> = props => {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies);
  useEffect(() => {
    dispatch(fetchMovie("avenger"));
    
  }, [])
  
  console.log(movies)
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
        }}
      />
    </View> 
  );
};
