import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
import UXDTextInput from './app/uxdTextInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
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
            {'My TextInput Value bound by state: ' + this.state.text + ' '}
          </Text>
          <UXDTextInput 
            keyboardType={'numeric'}
            autoComplete={false}
            // autoCorrect={true/false}
            multiline={true}
            placeholder='enter value'
            maxLength={250}
            //value={this.state.text}
          />
        </View>
        <View style={{flexDirection:'row', flex:1, justifyContent: 'space-evenly', alignItems:"flex-end", backgroundColor: '#4197C2', maxHeight:80}}>
            <Text style={{color: '#fff', paddingBottom:30, fontSize:22}}> #UXDEVSUMMIT
              </Text>
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
