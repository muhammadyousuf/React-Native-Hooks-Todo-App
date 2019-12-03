import RNAccountKit from 'react-native-facebook-account-kit';
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
// Configures the SDK with some options
export default class BeforeLoginPage extends Component {
  state = {
    isLoading: false,
  };

  renderAccountKit() {
    RNAccountKit.configure({
      responseType: 'code', // 'token' by default,
      // titleType: 'login',
      // initialAuthState: '',
      // initialEmail: 'some.initial@email.com',
      initialPhoneCountryPrefix: '+92', // autodetected if none is provided
      // initialPhoneNumber: '123-456-7890',
      // facebookNotificationsEnabled: true|false, // true by default
      // readPhoneStateEnabled: true|false, // true by default,
      // countryWhitelist: ['AR'], // [] by default
      // countryBlacklist: ['US'], // [] by default
      defaultCountry: 'PK',
      // theme: {
      //   // for iOS only, see the Theme section
      // },
      // viewControllerMode: 'show'|'present', // for iOS only, 'present' by default
      // getACallEnabled: true|false,
      // setEnableInitialSmsButton: true|false, // true by default
    });

    // Shows the Facebook Account Kit view for login via SMS
    RNAccountKit.loginWithPhone().then(token => {
      if (!token) {
        console.log('Login cancelled');
      } else {
        console.log('Login successful', token);

        this.setState({
          isLoading: true,
        });
        console.log(token.code);

        // accountKitLogin(token.code).then(res => {
        //   console.log('Login successful from api', JSON.stringify(res));

        //   let data = res.data.customerRec;
        //   console.log('data', data);

        //   this.props.screenProps.app.setState({
        //     userData: data,
        //   });
        // });
      }
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text onPress={this.renderAccountKit}>Lazzy Loading</Text>
        {/* {this.state.isLoading ? (
          <View>
            <Text>Lazzy Loading</Text>
          </View>
        ) : (
          this.renderContent()
        )} */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textCenterStyle: {
    textAlign: 'center',
    fontSize: 16,
  },
});
