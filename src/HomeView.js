/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// importar modulos externos o que se hayan declaro

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Platform
} from 'react-native';

import ArtisList from './ArtistList.js'
import { getArtist } from './api-client.js'

export default class HomeView extends Component {
  state = {
    artist: null
  }

  componentDidMount(){
    getArtist()
    .then((data) => this.setState({artist: data}))
  }

  render() {
    const artists = this.state.artist

    return (
      <View style={styles.container}>
      {!artists && <ActivityIndicator size="large"/>}
      {artists && <ArtisList    artists={artists}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: Platform.select({
      ios: 30,
      android:10
    }),
  },
});


