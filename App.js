import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ backgroundColor: '#A62075', flex: 1, alignItems: 'center', justifyContent: 'flex-start', height: 130, paddingTop: 40 }}>
            <Text style={{ color: '#fff', fontFamily: 'Helvetica Neue', fontSize: 20 }}>
              My First React Native App @
            </Text>
            <Image source={require('./UXDevSummitLogo.png')} style={{ height: 60, width: 100, resizeMode: Image.resizeMode.contain }} />
          </View>
        </ScrollView>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Text style={{padding:10}}>
            {'Text Input Value bound by state: ' + this.state.text + ' '}
          </Text>
          <TextInput style={{ height: 40, padding: 20, borderColor: '#eee', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ text })}
            // keyboard types enum('default', 'numeric', 'email-address', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search')
            // example keyboardType={number}
            // autoComplete={true/false}
            // autoCorrect={true/false}
            // multiline={true/false}
            placeholder='enter value'
            //placeholderTextColor='blue'
            maxLength={50}
            //value={this.state.text}
          />
        </View>
        <View style={{flexDirection:'row', flex:1, justifyContent: 'space-evenly', alignItems:"flex-end", backgroundColor: '#4197C2', maxHeight:80}}>
            <Text style={{color: '#fff', paddingBottom:20, fontSize:22}}> #UXDEVSUMMIT
              </Text>
            {/* <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
            <View style={{ width: 100, height: 50, backgroundColor: 'skyblue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} /> */}
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'flex-start',
  },
});
