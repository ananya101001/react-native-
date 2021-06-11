import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import flash from '../src/flashScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';
class landingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ACCESS_TOKEN: 0,
    };
  }
  // }
  // storeToken(responseData) {
  //   AsyncStorage.setItem(ACCESS_TOKEN, responseData, err => {
  //     if (err) {
  //       console.log('an error');
  //       throw err;
  //     }
  //     console.log('success');
  //   }).catch(err => {
  //     console.log('error is: ' + err);
  //   });
  // }
  // call = () => {
  //   this.props.navigation.navigate('tabScreen');
  //   AsyncStorage.setItem('isLogin', 'true');
  // };
  //
  // storeToken(responseData) {
  //   AsyncStorage.setItem(this.state.ACCESS_TOKEN, responseData, err => {
  //     if (err) {
  //       console.log('an error');
  //       throw err;
  //     }
  //     console.log('success');
  //   }).catch(err => {
  //     console.log('error is: ' + err);
  //   });
  // }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            // this.props.navigation.navigate('tabScreen');
            this.call();
          }}
          style={styles.button}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default landingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ff1496',
    padding: 10,
  },
});
