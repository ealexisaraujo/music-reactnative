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
import { getArtist } from './api-client.js'

export default class AwesomeProject extends Component {
  state = {
    artist: []
  }

  componentDidMount(){
    getArtist()
    .then((data) => this.setState({artist: data}))
  }

  render() {
    const artists = this.state.artist

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
