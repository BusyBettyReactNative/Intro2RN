// UXDSummit Colors 
//light blue #4197C2
//purple #993072
//lime #B9CE53

//This covers TextInputs Props and Touch Events

//TODO Create :
// - input field with placeholder text
// - add gray border with padding
// - display text entered text on the page
// - add a button or TouchableHighlight
// - add an onpress event that triggers and alert

//Works on https://facebook.github.io/react-native/docs/handling-text-input.html

import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, Text, Image, TextInput } from 'react-native';

export default class TextInputsBasics extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <ScrollView>
        <View style={{ backgroundColor: '#4197C2', flexDirection: 'row', padding: 10 }}>
          <Image source={'https://facebook.github.io/react-native/img/header_logo.png'} style={{ width: 33, height: 29 }} />
          <Text style={{ color: 'white', padding: 10 }}>React Native</Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, padding: 10, justifyContent: 'center' }}>
          <ScrollView>
            <Text style={{ alignSelf: 'center', padding: 10, fontFamily: 'GillSans-Bold' }}>
              React Native is Awesome.</Text>
            <View style={{ padding: 10 }}>
              <Text style={{ fontFamily: 'GillSans-Bold' }}> {this.state.text} </Text>
              <Text> Is learning React Native Today</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 2 }}
                placeholder="Enter your Name"
                onChangeText={(text) => this.setState({ text })}
              />

            </View>
          </ScrollView>
        </View>

        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: "flex-end" }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 100, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>
      </ScrollView>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => TextInputsBasics);

