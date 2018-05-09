import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image,TextInput } from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={ styles.container}>
        <ScrollView>
          <View style={{ backgroundColor: '#A62075', flex: 1, alignItems: 'center', justifyContent: 'flex-start', height: 130, paddingTop: 40 }}>
            <Text style={{ color: '#fff', fontFamily: 'Helvetica Neue', fontSize: 20 }}>
              My First React Native App @
            </Text>
            <Image source={require('./UXDevSummitLogo.png')}  style={{height:60, width:100,resizeMode: Image.resizeMode.contain}}/>
          </View>
        </ScrollView>
        <View style={ styles.container }>
        <Text>
          {'user input: ' +  this.state.text + ' '}
        </Text>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput style={{height: 40, padding: 20, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          // keyboard types enum('default', 'numeric', 'email-address', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search')
            // example keyboardType={number}
          // autoCorrect   bool
            //example autoCorrect={false}
          // multiline={true/false}
          value={this.state.text}
        />
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
    justifyContent: 'flex-start',
  },
});
