import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class ScreenTwo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Welcome ${navigation.state.params.account}`,
    }
  };
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{state.params.account}</Text>
        <Text style={styles.titleText}>{state.params.name}</Text>
        <Text style={styles.titleText}>{state.params.currency}</Text>
        <Text style={styles.titleText}>{state.params.type}</Text>
        <Text style={styles.titleText}>{state.params.leverage}</Text>
      </View>
      
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 22
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  button: {
    borderRadius: 20,
    height: 50,
    flex: 2,
    margin: 10,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18
  }
});
export default ScreenTwo;
