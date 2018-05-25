import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header  } from './components/common';
import LoginForm from './components/LoginForm';

class AppContent extends Component{

    render(){
        return(
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default AppContent;