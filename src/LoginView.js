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
  Text,
  Button,
  Image
} from 'react-native';

import FBSDK, {
  LoginButton,
  AccessToken
}  from 'react-native-fbsdk'

import {Actions} from 'react-native-router-flux'

import firebase, { 
  firebaseAuth 
} from './firebase.js'

  const { FacebookAuthProvider } = firebase.auth

export default class LoginView extends Component {
  state = {
    credential: null
  }

  componentWillMount(){
    this.authenticateUser()
  }

  authenticateUser = () => {
   AccessToken.getCurrentAccessToken().then((data) => {
    if (!data){
      return
    }
        const { accessToken } = (data) 
        const credential = FacebookAuthProvider.credential(accessToken)
        firebaseAuth.signInWithCredential(credential).then((credentials) => {
          Actions.root()
        }, (error) => {
          console.log("Sign In Error", error);
        })
      })
    }

  handleLoginfinished = (error, result) => {
  if (error) {
    console.error(error)
  } else if (result.isCancelled) {
    alert("login is cancelled.");
  } else {
      this.authenticateUser()
  }
}

handleButtonPress = () => {
  Actions.root()
}
 
  render() {
    return (
      <Image source={require('./background.jpg')} style={styles.container}>
        <Text style={styles.welcome}>
        Bienvenido
        </Text>
        <Image source={require('./logo.png')} style={styles.logo} />
          <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={this.handleLoginfinished} />
         {/* onLogoutFinished={() => alert("logout.")}/>*/}
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
      width: 150,
      height:150,
      marginBottom: 15,
  },
  welcome:{
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    backgroundColor: 'transparent',
    color: 'white'
  }
});


