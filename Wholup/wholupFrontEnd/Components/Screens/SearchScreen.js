import React from 'react';
import {View, ScrollView, StyleSheet } from 'react-native';
import {Avatar, Text,  List, ListItem } from 'react-native-elements'

import {connect} from 'react-redux';

class SearchScreen extends React.Component {

 render() {


   var users = [
     { firstName: "Test", name:"Carpenter", title: "EC", email: "contact1@gmail.com", company: "Deckow-Crist"},
     { firstName: "John", name:"Doe", title: "JD", email: "contact2@gmail.com", company: "Deckow-Crist"},
     { firstName: "Noel", name: "Paganelli", title: "NP", email: "contact3@gmail.com", company: "Deckow-Crist"}
   ]

   var usersList = users.map((user, i) => {
     console.log("hello")
     return (
       <ListItem
         key={i}
         onPress={() => this.props.handleContact(user.name, user.firstName, user.email, user.company)}
         avatar={
           <Avatar
             small
             rounded
             title={user.title}
             overlayContainerStyle={{backgroundColor: '#16a085'}}
           />
         }
         title={user.firstName + ' ' + user.name}
         subtitle={
           <View style={styles.subtitle}>
             <Text style={styles.ratingText}>{user.email}</Text>
             <Text style={styles.ratingText}> company: {user.company}</Text>
           </View>
         }
       />
   )
   })


   return (
     <ScrollView style={styles.container}>
       <List>
         {usersList}
       </List>
     </ScrollView>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   paddingTop: 15,
   backgroundColor: '#fff',
 },
 subtitle:{
   flexDirection:'row',
   padding:10,
   paddingTop:5,
 },
 ratingText:{
   color: 'grey',
 }
});

function mapDispatchToProps(dispatch) {
  return {
    handleContact: function(nameContact, firstNameContact, emailContact, companyContact) {
      dispatch({
        type: 'addcontact',
        name: nameContact,
        firstName: firstNameContact,
        email: emailContact,
        company: companyContact
      });
    },
  }
};

export default connect(null, mapDispatchToProps)(SearchScreen);














// <ListItem
//   avatar={
//   <Avatar
//     small
//     rounded
//     title="EC"
//     overlayContainerStyle={{backgroundColor: '#e67e22'}}/>}
//   title="Emilie Carpenter"
//   key="0"
//   subtitle={
//     <View style={styles.subtitle}>
//       <Text style={styles.ratingText}>contact@gmail.com</Text>
//       <Text style={styles.ratingText}>company: Deckow-Crist</Text>
//     </View>
//   }
//   >
// </ListItem>
// <ListItem
//    key="1"
//    avatar={
//      <Avatar
//        small
//        rounded
//        title="JD"
//        overlayContainerStyle={{backgroundColor: '#3498db'}}
//      />
//    }
//    title="John Doe"
//    subtitle={
//      <View style={styles.subtitle}>
//        <Text style={styles.ratingText}>contact@gmail.com</Text>
//        <Text style={styles.ratingText}> company: Deckow-Crist</Text>
//      </View>
//    }
//  />
//
{/* <ListItem
  key="2"
  avatar={
    <Avatar
      small
      rounded
      title="EC"
      overlayContainerStyle={{backgroundColor: '#16a085'}}
    />
  }
  title="Noel Paganelli"
  subtitle={
    <View style={styles.subtitle}>
      <Text style={styles.ratingText}>contact@gmail.com</Text>
      <Text style={styles.ratingText}> company: Deckow-Crist</Text>
    </View>
  }
/> */}
