import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import land from '../src/landingScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';
export default class flashScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
    };
  }
  // AsyncStorage.setItem('key', 'value');
  // let name = "Michal";
  // AsyncStorage.setItem('user',name);
  //   export AUTH_TOKEN = "authToken";
  //
  //   export class AuthService {
  //
  //   static async saveToken(token) {
  //     await AsyncStorage.setItem(AUTH_TOKEN, token);
  //   }
  //
  //   static async isLoggedIn() {
  //     const token = await AsyncStorage.getItem(AUTH_TOKEN);
  //     return token !== null;
  //   }
  //
  // }
  //
  // async getToken() {
  //   try {
  //     let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
  //     if (!accessToken) {
  //       this.props.navigation.navigate('Login');
  //       // console.warn(accessToken);
  //     } else {
  //       this.setState({accessToken: accessToken});
  //       console.warn(accessToken);
  //     }
  //   } catch (error) {
  //     console.log('Something went wrong');
  //     // console.warn("Something went wrong");
  //     this.props.navigation.navigate('tabScreen');
  //   }
  // }
  //   async componentDidMount(){
  //     const isLogin = await AsyncStorage.getItem(true);
  //     setTimeout(() => {
  //       this.setState({ isLoading: false })
  //       const { navigate } = this.props.navigation;
  //       if(isLogin != null || isLogin == "true")
  //         navigate("tabScreen");
  //     }else{
  //       navigate("land");
  //     }
  //   },2000);
  // }
  // // async storeToken(user) {
  //   try {
  //     await AsyncStorage.setItem("userData", JSON.stringify(user));
  //   } catch (error) {
  //     console.log("Something went wrong", error);
  //   }
  // }
  // async getToken(user) {
  //   try {
  //     let userData = await AsyncStorage.getItem("userData");
  //     let data = JSON.parse(userData);
  //     console.log(data);
  //   } catch (error) {
  //     console.log("Something went wrong", error);
  //   }
  // }
  // signInAsync = async () => {
  //   await AsyncStorage.setItem('LOGIN_TOKEN', 'abc');
  //   this.props.navigation.navigate('tabScreen');
  // };
  Hide_Splash_Screen = () => {
    this.props.navigation.navigate('land');
  };

  componentDidMount() {
    // var that = this;
    // setTimeout(function () {
    //   that.Hide_Splash_Screen();
    // }, 10000);
    // const isLogin = AsyncStorage.getItem('isLogin');
    // if (isLogin != null || isLogin == 'true') {
    //   var that = this;
    //   setTimeout(function () {
    //     that.Hide_Splash_Screen();
    //   }, 10000);
    //   this.props.navigation.navigate('tabScreen');
    // } else {
    this.Hide_Splash_Screen();
  }
  // var that = this;
  // setTimeout(function () {
  //   that.Hide_Splash_Screen();
  // }, 10000);

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Text style={{fontSize: 24, fontStyle: 'italic'}}>
            Welcome to react native
          </Text>
        </View>
      </View>
    );
    return (
      <View style={styles.MainContainer}>
        {this.state.isVisible === true ? Splash_Screen : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    flex: 1,
  },
});
