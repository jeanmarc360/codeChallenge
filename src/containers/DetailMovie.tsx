import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/reducers/index';
import {clickMovies} from '../redux/index';
import {URLS} from '../services/url';
import {MovieDetailInterface} from '../redux/types/movies/movies.types';
import {Text} from 'react-native';
import {posterSizes} from '../common/image/size';
import {Image} from 'react-native-elements';
import {images} from '../common/image/images';

const deviceSize = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'gray',
  },
  ImageBackground: {
    flex: 1,
    resizeMode: 'stretch',
    width: deviceSize.width,
    height: deviceSize.width,
    alignItems: 'flex-start',
  },
  scrollview: {
    backgroundColor: 'gray',
  },
  back: {
    width: 50,
    height: 50,
    resizeMode: 'center',
    margin: 10,
  },
  detail: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  text: {
    color: '#ffffff',
  },
});

export const DetailMovie = ({route, navigation}: any) => {
  const {id} = route.params;
  const dispatch = useDispatch();

  /***
   * Get the details movies reducer value
   */
  const detail: MovieDetailInterface = useSelector(
    (state: RootState) => state.movieReducer.detailMovie,
  );

  /**
   * Call clickMovies action to feach detail
   */
  useEffect(() => {
    console.log('Screen Detail Movie');
    dispatch(clickMovies(id));
    //console.log(detail);
  }, []);

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        {detail ? (
          <>
            <ImageBackground
              source={{
                uri: URLS.URL_IMAGE(posterSizes.w780, detail.poster_path),
              }}
              style={styles.ImageBackground}>
              <Image
                style={styles.back}
                source={images.back_button}
                onPress={() => navigation.goBack()}
              />
            </ImageBackground>
            {
              <View style={styles.detail}>
                <Text style={styles.title}>{`${detail.title}`}</Text>
                <Text
                  style={
                    styles.text
                  }>{`Note : ${detail.vote_average}/10`}</Text>
                <Text style={styles.text}>{`${detail.overview}`}</Text>
              </View>
            }
          </>
        ) : (
          <View/>
        )}
      </View>
    </ScrollView>
  );
};
