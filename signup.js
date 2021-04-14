import React, {Fragment} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {CheckBox} from 'react-native-elements';

// import colors from './src/colors';
export default class signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasFocus: false};
    this.state = {hasFocus1: false};
    this.state = {hasFocus2: false};
    this.state = {hasFocus3: false};
    this.state = {hasFocus4: false};
    this.state = {hasFocus5: false};
    this.state = {
      isPasswordShowing: false,
      isPasswordShowing1: false,
      checked: false,
      passwordInputBorderColor: '#DDDDDD',
      cpasswordInputBorderColor: '#DDDDDD',
      email: '',
      validated: false,
      first_name: '',
      last_name: '',
      phone: '',
      passw: '',
      cpassw: '',
      gender: '',
      password: '',
      auth_token: '',
    };
  }
  validate = (text, text1, text2) => {
    console.log(text, text1, text2);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false && text1 != text2) {
      alert('Incorrect email and password not matching');
      this.setState({email: text});
      return false;
    } else if (reg.test(text) === false && text1 === text2) {
      alert('email incorrect');
    } else if (reg.test(text) === true && text1 != text2) {
      alert('password incorrect');
    }
    console.log(text1);
    console.log(text2);
  };

  onFocus11(type) {
    if (type == 'pass') {
      this.setState({
        passwordInputBorderColor: 'pink',
      });
    } else if (type == 'cpass') {
      this.setState({
        cpasswordInputBorderColor: 'pink',
      });
    }
  }

  onBlur11(type) {
    if (type == 'pass') {
      this.setState({
        passwordInputBorderColor: '#DDDDDD',
      });
    } else if (type == 'cpass') {
      this.setState({
        cpasswordInputBorderColor: '#DDDDDD',
      });
    }
  }

  setFocus(hasFocus) {
    this.setState({hasFocus});
  }

  setFocus1(hasFocus1) {
    this.setState({hasFocus1});
  }

  setFocus2(hasFocus2) {
    this.setState({hasFocus2});
  }

  setFocus3(hasFocus3) {
    this.setState({hasFocus3});
  }

  setFocus4(hasFocus4) {
    this.setState({hasFocus4});
  }

  setFocus5(hasFocus5) {
    this.setState({hasFocus5});
  }
  SignupApi = async () => {
    return fetch(
      'https://staging-apis.megadolls.com/api/mobile/user/v1/register',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'rashmirrao12345@gmail.com',
          first_name: 'rashmi',
          last_name: 'rao',
          phone: '9449472965',
          gender: 'Female',
          password: 'test12345',
        }),
      },
    )
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.setState({
          fname: res.first_name,
          lname: res.last,
          phone: res.phone,
          gender: res.gender,
          pass: res.password,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    const {first_name, last_name, email, password, phone, gender} = this.state;
    if (this.state.auth_token == '') {
      return (
        <Fragment>
          <SafeAreaView style={{backgroundColor: 'white'}} />
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
              <View style={styles.con1}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('pass')}>
                  <Image
                    style={styles.logo}
                    source={require('../src/left-arrow-key.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.header1}>Sign Up</Text>
                {/*<Image style={styles.im} source={require('../visibility.png')} />*/}
              </View>
              <ScrollView
                style={{height: 500, backgroundColor: 'white'}}
                showsVerticalScrollIndicator={false}>
                <View style={styles.part2}>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput
                    style={this.state.hasFocus ? styles.in1 : styles.in}
                    onFocus={this.setFocus.bind(this, true)}
                    onBlur={this.setFocus.bind(this, false)}
                    placeholder="Enter the First Name"
                    onChangeText={value => this.setState({fname: value})}
                  />
                  <Text style={styles.label}>Last Name</Text>
                  <TextInput
                    style={this.state.hasFocus1 ? styles.in1 : styles.in}
                    onFocus={this.setFocus1.bind(this, true)}
                    onBlur={this.setFocus1.bind(this, false)}
                    placeholder="Enter the last name"
                    onChangeText={value => this.setState({lname: value})}
                  />
                  <Text style={styles.label}>Contact No</Text>
                  <TextInput
                    keyboardType={'phone-pad'}
                    style={this.state.hasFocus2 ? styles.in1 : styles.in}
                    onFocus={this.setFocus2.bind(this, true)}
                    onBlur={this.setFocus2.bind(this, false)}
                    placeholder="Enter contact no"
                    onChangeText={value => this.setState({cn: value})}
                  />
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={this.state.hasFocus3 ? styles.in1 : styles.in}
                    onFocus={this.setFocus3.bind(this, true)}
                    onBlur={this.setFocus3.bind(this, false)}
                    placeholder="Enter the email"
                    onChangeText={value => this.setState({email: value})}
                    value={this.state.email}
                    keyboardType="email-address"
                  />
                  <View>
                    <Text style={styles.label}>Password</Text>
                    <View
                      style={[
                        styles.textInputContainer,
                        {borderColor: this.state.passwordInputBorderColor},
                      ]}>
                      <TextInput
                        secureTextEntry={!this.state.isPasswordShowing}
                        onBlur={() => this.onBlur11('pass')}
                        onFocus={() => this.onFocus11('pass')}
                        style={styles.textInputStyle}
                        placeholder="enter password"
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
                            style={{height: 20, width: 20}}
                            source={require('../src/eye_show.png')}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() =>
                            this.setState({
                              isPasswordShowing: !this.state.isPasswordShowing,
                            })
                          }
                          style={{padding: 5}}>
                          <Image
                            style={{height: 20, width: 20}}
                            source={require('../src/eye_hide.png')}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                  <View>
                    <Text style={styles.label}>Confirm Password</Text>
                    <View
                      style={[
                        styles.textInputContainer,
                        {borderColor: this.state.cpasswordInputBorderColor},
                      ]}>
                      <TextInput
                        secureTextEntry={!this.state.isPasswordShowing1}
                        onBlur={() => this.onBlur11('cpass')}
                        onFocus={() => this.onFocus11('cpass')}
                        style={styles.textInputStyle}
                        placeholder="confirm password"
                        value={this.state.cpassw}
                        onChangeText={value => this.setState({cpassw: value})}
                      />
                      {this.state.isPasswordShowing1 ? (
                        <TouchableOpacity
                          onPress={() =>
                            this.setState({
                              isPasswordShowing1: !this.state
                                .isPasswordShowing1,
                            })
                          }>
                          <Image
                            style={{height: 20, width: 20}}
                            source={require('../src/eye_show.png')}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() =>
                            this.setState({
                              isPasswordShowing1: !this.state
                                .isPasswordShowing1,
                            })
                          }
                          style={{padding: 5}}>
                          <Image
                            style={{height: 20, width: 20}}
                            source={require('../src/eye_hide.png')}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                  <View style={styles.checkboxContainer}>
                    <CheckBox
                      checkedIcon={
                        <Image
                          style={styles.checkbox}
                          source={require('../src/checked.png')}
                        />
                      }
                      uncheckedIcon={
                        <Image
                          style={styles.checkbox}
                          source={require('../src/unchecked.png')}
                        />
                      }
                      checked={this.state.checked}
                      onPress={() =>
                        this.setState({checked: !this.state.checked})
                      }
                    />
                    <Text style={styles.label1}>
                      I agree with privacy and policy and terms of use
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      this.SignupApi();
                    }}>
                    <Text style={styles.bt}>Signup</Text>
                  </TouchableOpacity>
                  <Text style={styles.or}>Or Login With</Text>
                  <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.ButtonStyle}>
                      <Image
                        style={styles.option1}
                        source={require('../src/google.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonStyle}>
                      <Image
                        style={styles.option2}
                        source={require('../src/fb.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      top: 30,
                      flexDirection: 'row',
                      left: 110,
                    }}>
                    <Text>Already a member?</Text>
                    <Text
                      style={{
                        left: 20,
                        color: '#FF1493',
                        textDecorationLine: 'underline',
                      }}>
                      Login
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </SafeAreaView>
        </Fragment>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  con1: {
    // flex: 1,
    height: 200,
    backgroundColor: '#FF1493',
  },
  logo: {
    top: 30,
    left: 20,
    paddingLeft: 30,
    height: 20,
    width: 1,
    tintColor: 'white',
  },
  ButtonStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#F8F8F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  ButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  pass: {
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  header1: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    top: 5,
    paddingLeft: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  part2: {
    // flex: 7,
    height: 300,
    borderTopColor: 'white',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    borderLeftWidth: 2,
    borderLeftColor: 'white',
    borderRightWidth: 2,
    borderRightColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    // marginTop: 10,
    marginBottom: 50,
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
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  textInputContainer: {
    borderWidth: 3,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
  },
  in22: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'lightgray',
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  textInputStyle: {
    width: 300,
  },
  eye: {
    width: 20,
    height: 20,
    paddingLeft: '40',
    // right: -40,
    // bottom: 48,
  },
  in1: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#FF1493',
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    marginBottom: 10,
  },
  in11: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#FF1493',
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  button: {
    backgroundColor: '#FF1493',
    padding: 10,
    borderRadius: 20,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    left: 115,
  },
  bt: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  or: {
    textAlign: 'center',
    top: 10,
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
    // left: 50,
    top: 20,
  },
  option1: {
    // left: 150,
  },
  option2: {
    // left: 220,
  },
  new: {
    top: 60,
    alignItems: 'center',
    justifyContent: 'center',
    left: 100,
    bottom: 50,
  },
  sign: {
    top: 60,
    left: 150,
    color: '#FF1496',
    textDecorationLine: 'underline',
  },
  foo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    alignSelf: 'center',
    height: 20,
    width: 20,
  },
  label1: {
    margin: 14,
  },
});
