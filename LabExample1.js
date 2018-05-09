// UXDSUmmit Colors 
//light blue #4197C2
//purple #993072
//lime #B9CE53



//Works on https://facebook.github.io/react-native/docs/height-and-width.html 

import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, Text, Image } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor:'#4197C2', flexDirection:'row', padding:10}}>
          <Image source={'https://facebook.github.io/react-native/img/header_logo.png'}style={{width: 33, height: 29}}/>
          <Text style={{ color:'white', padding:10}}>React Native</Text>
        </View>
        <View style={{flexDirection:'row',flex:1, justifyContent: 'center', alignItems:"flex-start"}}>
        <Text style={{alignSelf:'center', padding:10, fontFamily:'GillSans-Bold'}}>React Native is Awesome.</Text>
                </View>
      <View style={{flexDirection:'row',flex:1, justifyContent: 'center', alignItems:"flex-end"}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
        </ScrollView>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);

