// UXDSUmmit Colors 
//light blue #4197C2
//purple #993072
//lime #B9CE53



//Works on https://facebook.github.io/react-native/docs/height-and-width.html 

//TODO move inline styles to classes, create a prop for the image url

import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, StyleSheet,Text, Image } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    let imgURL = 'https://facebook.github.io/react-native/img/header_logo.png';
    return (
      <ScrollView>
        <View style={{backgroundColor:'#4197C2', flexDirection:'row', padding:10}}>
          <Image source={imgURL} style={styles.headerLogo}/>
          <Text style={styles.headerText}>React Native</Text>
        </View>
        <View style={styles.bodyContentContainer}>
        <Text style={styles.bodyText}>React Native is Awesome.</Text>
                </View>
      <View style={styles.footerContainer}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerLogo: {
    width : 33, 
    height : 29
  },
  headerText: {
    color:'white', padding:10
  },
  bodyContentContainer: {
    flexDirection:'row',flex:1, justifyContent: 'center', alignItems:"flex-start"
  },
  bodyText: {
    alignSelf:'center', padding:10, fontFamily:'GillSans-Bold'
  },
  footerContainer: {
    flexDirection:'row',flex:1, justifyContent: 'center', alignItems:"flex-end"
  }
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);
