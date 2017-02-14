/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// importar modulos externos o que se hayan declaro
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {firebaseAuth, firebaseDatabase} from './firebase'
import ArtistBox from './ArtistBox'
import CommentList from './CommentList'


export default class ArtisDetailView extends Component {
state = {
  comments: []
}

componentDidMount() {
  this.getArtistCommentsRef().on('child_added', this.addComment);
}

componentWillUnmount(){
  this.getArtistCommentsRef().off('child_added', this.addComment);
}

addComment = (data) => {
    const comment = data.val()
    this.setState({
      comments: this.state.comments.concat(comment)
    })
  }

hanldeSend = () => {
  const {text} = this.state
  const { uid, photoURL } = firebaseAuth.currentUser
  const artistCommentRef = this.getArtistCommentsRef()
  var newCommentRef = artistCommentRef.push();
  newCommentRef.set({
    text,
    userPhoto: photoURL,
    uid
  });
  this.setState({text: ''})
}

  getArtistCommentsRef = () => {
    const {id} = this.props.artist
    return firebaseDatabase.ref(`comments/${id}`)
  }

handleChangeText = (text) => this.setState({text})


 render() {
    const artist = this.props.artist
    const {comments} = this.state

    return (

        <View style={styles.container}>
        <ArtistBox    artist={artist}/>
        <KeyboardAwareView animated={true}>
        <CommentList comments={comments} />
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value={this.state.text}
                  placeholder="Opina sobre este artista"
                  onChangeText={this.handleChangeText}
                />
                <TouchableOpacity onPress={this.hanldeSend}> 
                     <Icon name="ios-send-outline" size={30} color="gray"/>
                </TouchableOpacity> 
              </View> 
         </KeyboardAwareView>
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
  header:{
    fontSize: 20,
    paddingHorizontal: 15,
    marginVertical: 0
  },
  inputContainer:{
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flexGrow:1
  }
});


