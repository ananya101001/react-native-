import {Fragment} from 'react';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  StatusBar,
  Platform,
} from 'react-native';
import Pic from '../src/camera.svg';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
var hobbies = [
  {label: 'Male', value: 0},
  {label: 'Female', value: 1},
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasFocus1: false};
    this.state = {hasFocus2: false};
    this.state = {hasFocus3: false};
    this.state = {hasFocus4: false};
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
  render() {
    return (
      <Fragment>
        <SafeAreaView style={{backgroundColor: '#ff1496'}} />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.header}>
            <Image
              source={require('../src/left-arrow-key.png')}
              style={{height: 30, width: 30, tintColor: 'white'}}
            />
            <Text style={styles.headerText}>Profile Details</Text>
          </View>
          <ScrollView>
            <View style={styles.body}>
              <View style={styles.container1}>
                <Image
                  source={require('../src/profile_image.png')}
                  style={{height: 100, width: 100}}
                />
                <Pic left={40} bottom={35} />
              </View>
              <View style={styles.boxcontainer}>
                <Text style={{padding: 10, top: 5, left: -6, fontSize: 15}}>
                  First Name
                </Text>
                <TextInput
                  style={this.state.hasFocus1 ? styles.in1 : styles.in}
                  onFocus={this.setFocus1.bind(this, true)}
                  placeholder={'enter first name'}
                />
              </View>
              <View style={styles.boxcontainer}>
                <Text style={{padding: 15, top: 10, left: -6}}>Last Name</Text>
                <TextInput
                  style={this.state.hasFocus2 ? styles.in1 : styles.in}
                  onFocus={this.setFocus2.bind(this, true)}
                  placeholder={'enter Last name'}
                />
              </View>
              <View style={styles.boxcontainer}>
                <Text style={{padding: 15, left: -6}}>Gender</Text>
                <View style={styles.container}>
                  <RadioForm
                    radio_props={hobbies}
                    initial={2}
                    onPress={value => {}}
                    buttonOuterSize={15}
                    buttonColor={'black'}
                    selectedButtonColor={'#FF1496'}
                    selectedLabelColor={'black'}
                    labelStyle={{fontSize: 15}}
                    disabled={false}
                    formHorizontal={true}
                    radioStyle={{paddingRight: 70}}
                  />
                </View>
              </View>
              <View style={styles.boxcontainer}>
                <Text style={{padding: 15, top: 10, left: -6}}>
                  email Address
                </Text>
                <TextInput
                  style={this.state.hasFocus3 ? styles.in1 : styles.in}
                  onFocus={this.setFocus3.bind(this, true)}
                  placeholder={'enter email address'}
                />
              </View>
              <View style={styles.boxcontainer}>
                <Text style={{padding: 15, top: 10, left: -6}}>Contact No</Text>
                <TextInput
                  style={this.state.hasFocus4 ? styles.in1 : styles.in}
                  onFocus={this.setFocus4.bind(this, true)}
                  placeholder={'enter contact number'}
                />
              </View>
              <TouchableOpacity style={styles.logout}>
                <Text style={{fontSize: 15, color: 'white'}}>Save Changes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logout1}>
                <Text style={{fontSize: 15, color: 'black'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    // width: windowWidth,
    // height: windowHeight * 0.07,
    backgroundColor: '#ff1496',
    flexDirection: 'row',
    padding: 20,
  },
  headerText: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    left: 7,
  },
  body: {
    width: windowWidth,
    height: windowHeight,
    borderTopColor: 'white',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    borderLeftWidth: 2,
    borderLeftColor: 'white',
    borderRightWidth: 2,
    borderRightColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    marginBottom: 60,
  },
  container1: {
    top: 20,
    padding: 30,
    alignItems: 'center',
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  boxcontainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  logout: {
    color: '#ff1496',
    width: windowWidth * 0.4,
    padding: 10,
    backgroundColor: '#ff1496',
    alignItems: 'center',
    borderRadius: 20,
    left: 200,
    top: 50,
  },
  logout1: {
    color: 'black',
    width: windowWidth * 0.4,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    left: 10,
    bottom: 10,
    top: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 45,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: '#ff1496',
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 10,
  },
  radioButton1: {
    height: 20,
    width: 20,
    left: 100,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonText1: {
    fontSize: 16,
    marginLeft: 10,
    left: 100,
  },
  in: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'lightgray',
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    marginBottom: 0,
    alignSelf: 'stretch',
  },
  in1: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#FF1493',
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    marginBottom: 0,
  },
  container: {
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default ProfileDetails;
