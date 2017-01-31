/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// importar modulos externos o que se hayan declaro

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import ArtisList from './ArtistList.js'

export default class AwesomeProject extends Component {

  render() {
        const artist = {
      image : 'https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png',
      name : 'David Bowie',
      likes : 200,
      comments : 140,
    }
    const artists = Array(500).fill(artist);

    return (
      <View style={styles.container}>
      <ArtisList    artists={artists}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
