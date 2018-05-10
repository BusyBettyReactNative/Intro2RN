import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class UXDTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder'
    };
  }

  render() {
    return (
          <View >
          <TextInput {...this.props}
              style={{ borderBottomColor: "#eee", paddingTop: 10, paddingLeft: 10, height: 40, width: 320, borderBottomWidth: 1 }}
              //placeholder={this.state.placeholderTxt}
              onChangeText={(inputText) => this.setState({ inputText })}
              value={this.state.inputText}
              placeholderTextColor='blue'
              //value={this.state.text}
          />
          <Text style={{ color: '#555', alignSelf: 'flex-end' }}>{this.state.text.length} / 200
          </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({

});

// UXDTextInput.propTypes = {
//   placeholder: PropTypes.string.isRequired,
//   inputText: PropTypes.string
// }
