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
  StatusBar,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Pro from '../src/profile.svg';
import Address from '../src/address.svg';
import Down from '../src/download.svg';
import Gift from '../src/gift.svg';
import Order from '../src/order.svg';
import Payment from '../src/payment.svg';
import Wish from '../src/wishlist.svg';
import Arrow from '../src/arrow_right.svg';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <SafeAreaView style={{backgroundColor: '#ff1496'}} />
        <SafeAreaView style={{flex: 1, backgroundColor: '#ff1496'}}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Profile</Text>
            <View style={styles.container1}>
              <Image
                source={require('../src/profile_image.png')}
                style={{height: 70, width: 70}}
              />
              <View style={styles.cred}>
                <Text
                  style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
                  Rossie Nikolaus
                </Text>
                <Text style={{fontSize: 15, color: 'white'}}>
                  rossie.nicolaus@gmail.com
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.logout}>
              <Text style={{fontSize: 15}}>Logout</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.body}>
              <View style={styles.pro}>
                <Pro height={30} width={30} />
                <Arrow height={10} width={10} left={280} top={13} />
                <Text style={{left: 30, top: 5}}>Profile details</Text>
              </View>
              <View style={styles.pro}>
                <Payment height={30} width={30} />
                <Arrow height={10} width={10} left={280} top={13} />
                <Text style={{left: 30, top: 5}}>Payment methods</Text>
              </View>
              <View style={styles.pro}>
                <Gift height={30} width={30} />
                <Arrow height={10} width={10} left={280} top={13} />
                <Text style={{left: 30, top: 5}}>E-Gift Cards </Text>
              </View>
              <View style={styles.pro}>
                <Order height={30} width={30} />
                <Arrow height={10} width={10} left={280} top={13} />
                <Text style={{left: 30, top: 5}}>WishLists</Text>
              </View>
              <View style={styles.pro}>
                <Wish height={30} width={30} />
                <Arrow height={10} width={10} left={280} top={13} />
                <Text style={{left: 30, top: 5}}>My Orders</Text>
              </View>
              <View style={styles.pro}>
                <Down height={30} width={30} />
                <Arrow height={10} width={10} left={280} top={13} />
                <Text style={{left: 30, top: 5}}>Download History</Text>
              </View>
              <View
                style={{
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                  padding: 20,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
              <View style={styles.pro1}>
                <Arrow height={10} width={10} left={310} top={13} />
                <Text style={{top: 5}}>Tour</Text>
              </View>
              <View style={styles.pro1}>
                <Arrow height={10} width={10} left={310} top={13} />
                <Text style={{top: 5}}>About Us</Text>
              </View>
              <View style={styles.pro1}>
                <Arrow height={10} width={10} left={310} top={13} />
                <Text style={{top: 5}}>Contact Us</Text>
              </View>
              <View
                style={{
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                  padding: 10,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
              <View style={styles.pro1}>
                <Arrow height={10} width={10} left={310} top={13} />
                <Text style={{top: 5}}>Terms of Use</Text>
              </View>
              <View style={styles.pro1}>
                <Arrow height={10} width={10} left={310} top={13} />
                <Text style={{top: 5}}>Privacy policy</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.27,
    backgroundColor: '#ff1496',
  },
  headerText: {
    fontSize: 20,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  container1: {
    flexDirection: 'row',
    padding: 10,
  },
  logout: {
    color: 'white',
    alignSelf: 'center',
    width: windowWidth * 0.4,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 20,
    left: -20,
  },
  body: {
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    height: windowHeight,
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
  },
  cred: {
    padding: 15,
  },
  pro: {
    flexDirection: 'row',
    left: 20,
    top: 30,
    padding: 10,
  },
  pro1: {
    flexDirection: 'row',
    left: 20,
    padding: 10,
  },
});

export default Profile;
