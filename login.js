import React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasFocus: false};
    this.state = {hasFocus1: false};
    this.state = {
      isPasswordShowing: false,
      isLoading: false,
      passw: '',
      email: '',
      auth_token: '',
    };
  }
  Login = async () => {
    fetch('https://staging-apis.megadolls.com/api/mobile/user/v1/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.passw,
      }),
    })
      .then(response => response.json())
      .then(res => {
        if (typeof res.message !== 'undefined') {
          Alert.alert('Error', 'Error: ' + res.message);
        } else {
          this.setState({auth_token: res.auth_token});
          Alert.alert(
            'Welcome' +
              '   ' +
              this.state.email +
              '   ' +
              'You have succesfully logged in',
          );
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  setFocus(hasFocus) {
    this.setState({hasFocus});
  }
  setFocus1(hasFocus1) {
    this.setState({hasFocus1});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.part1} />
        <View style={styles.part2}>
          <Text style={styles.header}>Login</Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={this.state.hasFocus ? styles.in1 : styles.in}
            onFocus={this.setFocus.bind(this, true)}
            onBlur={this.setFocus.bind(this, false)}
            placeholder="Enter the email"
            onChangeText={value => this.setState({email: value})}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry={!this.state.isPasswordShowing}
            placeholder="Enter password"
            style={this.state.hasFocus1 ? styles.in1 : styles.in}
            onFocus={this.setFocus1.bind(this, true)}
            onBlur={this.setFocus1.bind(this, false)}
            value={this.state.passw}
            onChangeText={value => this.setState({passw: value})}
          />
          {this.state.isPasswordShowing ? (
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  isPasswordShowing: !this.state.isPasswordShowing,
                })
              }>
              <Image
                style={styles.eye}
                source={require('../src/eye_show.png')}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  isPasswordShowing: !this.state.isPasswordShowing,
                })
              }>
              <Image
                style={styles.eye}
                source={require('../src/eye_hide.png')}
              />
            </TouchableOpacity>
          )}
          <Text style={styles.li}>Forgot password?</Text>
          <TouchableOpacity
            onPress={this.Login.bind(this)}
            style={styles.button}>
            <Text style={styles.bt}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.or}>Or Login With</Text>
          <View style={styles.option}>
            <Image style={styles.option1} source={require('../src/fb.png')} />
            <Image
              style={styles.option2}
              source={require('../src/google.png')}
            />
          </View>
          <View style={styles.foo}>
            <Text style={styles.new}>New User?</Text>
            <Text style={styles.sign}>SignIn</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  part1: {
    flex: 1,
    backgroundColor: '#FF1496',
  },
  part2: {
    flex: 8,
    borderTopColor: 'white',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    borderLeftWidth: 2,
    borderLeftColor: 'white',
    borderRightWidth: 2,
    borderRightColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  header: {
    padding: 30,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  in: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'lightgray',
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    marginBottom: 15,
  },
  eye: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    right: 30,
    bottom: 48,
  },
  in1: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#FF1493',
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FF1493',
    padding: 10,
    borderRadius: 20,
    width: windowWidth * 0.5,
    justifyContent: 'center',
    top: 25,
    left: 100,
    alignItems: 'center',
  },
  bt: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  or: {
    textAlign: 'center',
    top: 60,
  },
  label: {
    paddingLeft: 20,
    fontSize: 15,
  },
  li: {
    paddingLeft: 250,
    color: '#FF1493',
    textDecorationLine: 'underline',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 50,
    padding: 50,
    left: 50,
  },
  option1: {
    left: 160,
  },
  option2: {
    left: 30,
  },
  new: {
    top: 40,
    alignItems: 'center',
    justifyContent: 'center',
    left: 140,
  },
  sign: {
    top: 40,
    left: 150,
    color: '#FF1496',
    textDecorationLine: 'underline',
  },
  foo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
