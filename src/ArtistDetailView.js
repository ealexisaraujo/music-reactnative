/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// importar modulos externos o que se hayan declaro

import KeyboardSpacer from 'react-native-keyboard-spacer'; 
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox'
import { getArtist } from './api-client.js'
import {firebaseDatabase, firebaseAuth} from './firebase'

export default class ArtisDetailView extends Component {
hanldeSend = () => {
  const {text} = this.state
  const artistCommentRef = this.getArtistComomentsRef()
  var newCommentRef = artistCommentRef.push();
  newCommentRef.set({text});
}

  getArtistComomentsRef = () => {
    const {id} = this.props.artist
    return firebaseDatabase.ref(`comments/${id}`)
  }

handleChangeText = (text) => this.setState({text})


 render() {
    const artist = this.props.artist

    return (
      <View style={styles.container}>
      <ArtistBox    artist={artist}/>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Opina sobre este artista"
            onChangeText={this.handleChangeText}
          />
          <TouchableOpacity onPress={this.hanldeSend}> 
               <Icon name="ios-send-outline" size={30} color="gray"/>
          </TouchableOpacity> 
        </View>
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
  inputContainer:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 50,
    flex: 1
  }
});


