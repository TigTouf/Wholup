import React from 'react';
import { View, Text } from 'react-native';
import {Button, FormLabel, FormInput} from 'react-native-elements';

import ipAddress from '../Network/network';

export default class SignInScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  // Pas besoin de le binder car on est en ES6
  handleSubmit = (value) => {
    fetch(`http://${ipAddress}:3000/signin?email=${this.state.email}&password=${this.state.password}`)
    .then(response => response.json()) // S'il n'y a qu'un seul élément à return, pas besoin de {}
    .then(data => {
      if (data.isUserExist) {
        this.setState({error: null});
        this.props.navigation.navigate('Account');
      } else {
        // this.props.navigation.navigate('Home');
        this.setState({error: 'login failed'});
      }
    }).catch(error => console.error(error));
  };

  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={value => this.setState({email: value})}/>

        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={value => this.setState({password: value})}/>

        <Button
          style={{width:100, marginTop:20}}
          title ="Sign In"
          backgroundColor="#3498db"
          onPress={this.handleSubmit}
        />

        <Text style={{color: 'red', fontSize: 72}}>{this.state.error}</Text>

      </View>
    )
  }
}
