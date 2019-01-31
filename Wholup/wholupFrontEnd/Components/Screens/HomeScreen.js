import React from 'react';
import {
 View,
 ImageBackground
} from 'react-native';
import {Avatar, Text, Button, Divider} from 'react-native-elements'


export default class HomeScreen extends React.Component {


 render() {
   return (
     <ImageBackground style={{flex:1}} source={require("../../assets/Images/network.jpg")}>

     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

           <Text h1 style={{color: "#FFFFFF"}}>Whol'Up</Text>
           <Text h3 style={{color: "#FFFFFF"}}>Start your networking</Text>
           <Text h3 style={{color: "#FFFFFF"}}>now and everywhere</Text>

           <Button
             title="Sign In"
             style={{width:100}}
             backgroundColor='#3498db'
             onPress={ ()=> this.props.navigation.navigate('SignIn')}
             >
           </Button>
           <Divider style={{height:20}}/>
           <Button
             title="Sign Up"
             style={{width:100}}
             backgroundColor='#3498db'
             onPress={ ()=> this.props.navigation.navigate('SignUp')}
             >
           </Button>

     </View>

     </ImageBackground>    );
 }
}
