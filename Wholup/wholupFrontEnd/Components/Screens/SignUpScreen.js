import React from 'react';
import { View } from 'react-native';
import {Button, FormLabel, FormInput} from 'react-native-elements';

import ipAddress from '../Network/network';

export default class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    var ctx = this;
    // fetch sur un serveur "distant" car "localhost" correspond à l'adresse de la machine sur laquelle on est
    fetch('http://'+ipAddress+':3000/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: 'first_name='+this.state.first_name+'&last_name='+this.state.last_name+'&email='+this.state.email+'&password='+this.state.password
    }).then(function(response) {
      return response.json()
    }).then(function(data) {
      if (data.user) {
        ctx.props.navigation.navigate('Account');
      } else {
        console.log('erreur');
      }
    }).catch(function(error) {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <FormLabel>First Name</FormLabel>
        <FormInput onChangeText={(text) => this.setState({first_name: text})}/>
        <FormLabel>Last Name</FormLabel>
        <FormInput onChangeText={(text) => this.setState({last_name: text})}/>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(text) => this.setState({email: text})}/>
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={(text) => this.setState({password: text})}/>

        <Button
          style={{width:100, marginTop:20}}
          title="Sign Up"
          backgroundColor="#3498db"
          onPress={this.handleSubmit}
        />

      </View>
    )
  }
}
