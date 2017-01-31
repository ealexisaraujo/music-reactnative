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
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox'

export default class AwesomeProject extends Component {
  
  render() {
  const artist = {
      image : 'https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png',
      name : 'David Bowie',
      likes : 200,
      comments : 140,
    }

    return (
      <ScrollView style={styles.container}>
        {
          Array(10).fill(artist).map(artist => {
            return <ArtistBox artist={artist}/>
          })
        }  
      </ScrollView>
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
