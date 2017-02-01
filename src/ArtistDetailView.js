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
} from 'react-native';

import ArtistBox from './ArtistBox'
import { getArtist } from './api-client.js'

export default class ArtisDetailView extends Component {
 render() {
    const artist = this.props.artist

    return (
      <View style={styles.container}>
      <ArtistBox    artist={artist}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 70,
  },
});


