import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

class ScreenOne extends Component {
  constructor() {
  super();
  this._fetchStory = this._fetchStory.bind(this);
  this.state = {
  typedtext: ''
  };
}
_fetchStory(){
  var {navigate} = this.props.navigation;
  console.log('Fetch Story Start');

  // var username = this.state.username;
  // var password = this.state.password;


  function documentReady(){
    const params = {
        account: '63482078',
        password: '4b1d20da',
        application: 'test react'
    };

    requestToApi('authorize', params)
    .then(res => {
        if(res.hasOwnProperty('result')) {
          console.log(res.result);
          const {account, user_info: userInfo, token_info: tokenInfo} = res.result;
          var account = account;
          var name =  userInfo.Name;
          var currency =  userInfo.Currency;
          var type =  userInfo.Type;
          var leverage =  userInfo.Leverage;

         
          navigate("ScreenTwo", {
            account : account,
            name : name,
            currency : currency,
            type : type,
            leverage : leverage,
            status : true
          });
          


        


            // const {account, user_info: userInfo, token_info: tokenInfo} = res.result;
            // console.log('Account', account);
            // console.log('User info', userInfo);
            // console.log('Token info', tokenInfo);
        } else {
            console.table(response);
        }
    })
    .catch(error => console.error('Error', error));
}


  const requestToApi = (method, params) => {
    const API_URL = 'https://api-webtrader.ifxdb.com/';
    const args = {
        method,
        params
    };

    return fetch(API_URL, {
        method: 'POST',
        body: `rpc=${JSON.stringify(args)}`
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    });
};

documentReady();

}


  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props, "props is here");

    return (
      <View style={styles.container}>
        <View style={styles.TextInput}>
              <Text style={{
                fontSize: 30,
                textAlign: 'center'
              }}>Basic Login</Text>
        </View>
        <View style={styles.TextInput}>
              <TextInput
              placeholder="Account ID"
              style={{width:300, height: 40, borderColor: 'gray'}}
              onChangeText={username => this.setState({username})}
            />
            <TextInput
              placeholder="Password"
              style={{width:300, height: 40, borderColor: 'gray'}}
              value={this.state.password}
              onChangeText={password => this.setState({password})}
            />
        </View>
        <View style={styles.buttonContainer}>
          <Button
          onPress={this._fetchStory.bind(this)}
            title="Sign In"
          />
        </View>




      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  TextInput : {
    margin: 20
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
export default ScreenOne;
