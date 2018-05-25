import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContent from './src/AppContent';
import firebase from 'firebase';



export default class App extends React.Component {
  
  state = { loggedIn: null }

  componentWillMount(){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyDy1qWrQLPKAGDTSebn7AIyk9IqTL52oHY",
        authDomain: "juliosphotos-3d4a9.firebaseapp.com",
        databaseURL: "https://juliosphotos-3d4a9.firebaseio.com",
        projectId: "juliosphotos-3d4a9",
        storageBucket: "juliosphotos-3d4a9.appspot.com",
        messagingSenderId: "531593114819"
      }
    );

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({ loggedIn: true })
      }else{
        this.setState({ loggedIn: false })
      }
    });
  }

  
  
  render() {
    return (
      <AppContent loggedIn={this.state.loggedIn} />
    );
  }
}

