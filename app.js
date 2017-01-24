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
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class AwesomeProject extends Component {
  
  render() {
    const image = 'https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png'
    const name = 'David Bowie'
    const likes = 200
    const comments = 140
    
    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
        <Image style={styles.image} source={{uri : image }}/>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon name="ios-heart-outline" size={30} color="gray"/>
              <Text style={styles.count}>{likes}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="ios-chatboxes-outline" size={30} color="gray"/>
              <Text style={styles.count}>{comments}</Text>
            </View>
          </View>
          
        </View>
        </View>
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
  artistBox:{
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
  },
  info:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333'
  },
  row: {
    flexDirection : 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15,
  },
  iconContainer: {
    flex : 1,
    alignItems: 'center'
  },
  count: {
    color: 'gray'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
