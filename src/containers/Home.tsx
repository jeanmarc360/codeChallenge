import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/reducers/index';
import {fetchMovie} from '../redux/index';
import {URLS} from '../services/url';
import {MovieInterface} from '../redux/types/movies/movies.types';
import {Text} from 'react-native';
import {SearchView} from '../compoments/search/searchCompoment';
import {posterSizes} from '../common/image/size';
import {images} from '../common/image/images';
import {Image} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#254784',
    width: '100%',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  noresult: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  text_no_result: {
    color: '#ffffff',
    fontSize: 30,
    marginBottom: 20,
  },
});

export const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(1);
  const [search, setSearch] = useState('avenger');
  const [total, setTotal] = useState(0);
  const [startSearch, setStartSearch] = useState(true);
  /***
   * Get the movies reducer value
   */
  const movies: MovieInterface | null = useSelector(
    (state: RootState) => state.movieReducer.movies,
  );
  /*const movies: MovieInterface[] = useSelector(
    (state: RootState) => state.movieReducer.movies,
  );*/

  /**
   * Call action fetchMovie on screen display and if the user valid the text search
   */
  useEffect(() => {
    console.log('Screen Home');
    searchMovie();
  }, []);

  const loadMore = () => {
    if (total === 0) {
      setTotal(movies.total_pages);
    }
    setLoading(true);
    if (offset + 1 <= total) {
      setOffset(offset + 1);
      dispatch(fetchMovie(search, offset));
    }
    setLoading(false);
  };

  const refresh = () => {
    if (total === 0) {
      setTotal(movies.total_pages);
    }
    setLoading(true);
    if (offset - 1 > 0) {
      setOffset(offset - 1);
      dispatch(fetchMovie(search, offset));
    }
    setLoading(false);
  };
  /**
   * Render list separator
   * @returns
   */
  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
  /**
   * Save text enter in the search bar
   * @param text
   */
  const applySearch = text => {
    setSearch(text);
  };
  /**
   * beging search movies
   */
  const searchMovie = () => {
    //setStartSearch(true);
    setLoading(true);
    dispatch(fetchMovie(search, 1));
    setLoading(false);
    setStartSearch(false);
  };
  /**
   *  Render the footer's list
   * @returns
   */
  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => loadMore()}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  /**
   *  render the no result image and text if no result found
   * @returns
   */
  const renderNoResult = () => {
    return (
      <View style={styles.noresult}>
        <Text style={styles.text_no_result}>No result</Text>
        <Image source={images.no_result} style={{width: 200, height: 200}} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SearchView
        onChangeText={text => {
          //console.log(text);
          applySearch(text);
        }}
        onKeyPressSearch={() => {
          //console.log('clic');
          searchMovie();
        }}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : movies && movies.results && movies.results.length > 0 ? (
        <FlatList
          style={{marginTop: 20}}
          data={movies && movies.results}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailMovie', {id: item.id})}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  padding: 10,
                  alignItems: 'center',
                  alignContent: 'center',
                }}>
                <Image
                  style={{width: 50, height: 50}}
                  source={{
                    uri: URLS.URL_IMAGE(posterSizes.w780, item.poster_path),
                  }}
                  PlaceholderContent={<ActivityIndicator />}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: 10,
                  }}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#ffffff',
                    }}>
                    {item.title.length > 30
                      ? item.title.substring(0, 30) + '...'
                      : item.title}
                  </Text>
                  <Text
                    style={{
                      color: '#ffffff',
                    }}>{`Note : ${item.vote_average}/10`}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeparatorView}
          enableEmptySections={true}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={20}
          onRefresh={refresh}
          refreshing={false}
        />
      ) : (
        renderNoResult()
      )}
    </View>
  );
};
