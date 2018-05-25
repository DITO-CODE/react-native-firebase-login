import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner  } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class AppContent extends Component{


    renderContent(){
        

        switch(this.props.loggedIn) {
            case true: 
                return(
                    <Button
                    onPress={()=> firebase.auth().signOut()}
                    >
                        Log Out
                    </Button>
                );
            case false: 
                return <LoginForm />
            default:
                return <Spinner size="large" />
        }

        
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default AppContent;