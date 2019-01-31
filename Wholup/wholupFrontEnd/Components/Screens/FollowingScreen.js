import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import {Avatar, Text,  List, ListItem } from 'react-native-elements'

import {connect} from 'react-redux';

class FollowingScreen extends React.Component {

  render() {
    var contactList = this.props.addContact.map((user, i) => {
      var colorNbr = Math.random();
      var color;
      if (colorNbr < 0.25) {
        color = '#e67e22';
      } else if (colorNbr < 0.5) {
        color = '#3498db';
      } else if (colorNbr < 0.75) {
        color = '#16a085';
      } else {
        color = '#e74c3c';
      };

      return (
      <ListItem
        key={i}
        avatar={
          <Avatar
            small
            rounded
            title={user.firstName[0] + user.name[0]}
            overlayContainerStyle={{backgroundColor: color}}
          />
        }
        title={user.firstName + ' ' + user.name}
        subtitle={
          <View style={styles.subtitle}>
            <Text style={styles.ratingText}>{user.email}</Text>
            <Text style={styles.ratingText}> company: {user.company}</Text>
          </View>
        }
      />);
    });

    // tableau.reverse() sert à inverse le sens d'affichage du tableau
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <List>
            {this.props.addContact.length < 1
              ? <Text>Vous ne suivez aucun contact.</Text>
              : contactList.reverse()}
          </List>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  subtitle: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 5
  },
  ratingText: {
    color: 'grey'
  }
});


function mapStateToProps(state) {
  //                        contactCount, récupéré de App.js
  return {
    addContact: state.addContact,
  };
}

export default connect(mapStateToProps, null)(FollowingScreen);
