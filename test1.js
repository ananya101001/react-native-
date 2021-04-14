// import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
//
// class test1 extends React.Component {
//   friends = [
//     {name: 'Friend1', age: '10', key: '1'},
//     {name: 'Friend2', age: '10', key: '2'},
//     {name: 'Friend3', age: '10', key: '3'},
//     {name: 'Friend4', age: '10', key: '4'},
//     {name: 'Friend5', age: '10', key: '5'},
//   ];
//   render() {
//     return (
//       <FlatList
//         vertical={true}
//         showsVerticalScrollIndicator={false}
//         KeyExtractor={friend => friend.name}
//         data={this.friends}
//         renderItem={({item}) => {
//           return (
//             <Text style={styles.textStyle}>
//               {item.name}-Age{item.age}
//             </Text>
//           );
//         }}
//       />
//     );
//   }
// }
// const styles = StyleSheet.create({
//   textStyle: {
//     marginVertical: 50,
//   },
// });
// export default test1;
import React, {Fragment} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import Cart from '../src/Cart.svg';
import Noti from '../src/Notification-Icon.svg';
import Search from '../src/Search Icon.svg';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class test1 extends React.Component {
  array = [
    {
      id: '1',
      image: require('../src/Product Image-01.png'),
      name: 'Lorem Ipsum Dolor',
      text: 'Lorem ipsum dolor sit ametiously ',
      amount: '$8.70',
    },
  ];
  render() {
    return (
      <Fragment>
        <SafeAreaView style={{backgroundColor: '#ff1496'}} />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.rootContainer}>
            <View style={styles.header}>
              <Image
                source={require('../src/left-arrow-key.png')}
                style={styles.logo}
              />
              <Text style={styles.headerTextStyle}>My Cart</Text>
              <View style={styles.icons}>
                <Cart height={30} width={30} style={styles.icon1} />
                <Noti height={30} width={30} style={styles.icon2} />
                <Search height={30} width={30} style={styles.icon3} />
              </View>
            </View>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{marginTop: -15}}>
              <View style={styles.body}>
                <FlatList
                  vertical={true}
                  showsVerticalScrollIndicator={false}
                  KeyExtractor={array => this.array.id}
                  data={this.array}
                  renderItem={({item}) => {
                    return (
                      <View>
                        <View style={styles.flatlist}>
                          <Image
                            source={require('../src/image2x.png')}
                            style={{
                              height: windowWidth * 0.32,
                              width: windowWidth * 0.274,
                            }}
                          />

                          <View style={{flexDirection: 'column'}}>
                            <Text
                              style={{
                                fontSize: 22,
                                left: 15,
                                fontFamily: 'Roboto-Regular',
                              }}>
                              Lorem Ipsum Dolor
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                left: 15,
                                fontFamily: 'Roboto-Light',
                              }}>
                              lorem ipsum dolor
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                              <Text
                                style={{
                                  fontSize: 24,
                                  left: 15,
                                  top: 18.6,
                                  fontFamily: 'Roboto-Regular',
                                }}>
                                $8.70
                              </Text>
                              <TouchableOpacity
                                style={styles.button}
                                title={'+ 1 -'}>
                                <View style={{flexDirection: 'row'}}>
                                  <Text
                                    style={{
                                      color: '#ff1496',
                                      fontSize: 18,
                                      top: -5,
                                      left: 5,
                                    }}>
                                    -
                                  </Text>
                                  <Text
                                    style={{
                                      color: 'black',
                                      fontSize: 15,
                                      left: 18,
                                      top: -2,
                                    }}>
                                    {' '}
                                    1
                                  </Text>
                                  <Text
                                    style={{
                                      color: '#ff1496',
                                      fontSize: 15,
                                      left: 28,
                                      top:-2,
                                    }}>
                                    {' '}
                                    +{' '}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            </View>

                            <View style={styles.text1}>
                              <Text
                                style={{
                                  color: '#ff1496',
                                  fontSize: 15,
                                  left: 15,
                                  fontFamily: 'Roboto-Regular',
                                }}>
                                Remove
                              </Text>
                              <Text
                                style={{
                                  color: '#ff1496',
                                  left: 86,
                                  fontSize: 15,
                                  fontFamily: 'Roboto-Regular',
                                }}>
                                Move to Wishlist
                              </Text>
                            </View>
                          </View>
                          <View />
                        </View>
                        <View
                          style={{
                            borderBottomColor: 'lightgray',
                            borderBottomWidth: 1,
                            padding: 2,
                            marginLeft: 20,
                            marginRight: 20,
                          }}
                        />
                        <View style={styles.flatlist}>
                          <Image
                            source={require('../src/image2x.png')}
                            style={{
                              height: windowWidth * 0.32,
                              width: windowWidth * 0.274,
                            }}
                          />
                          <View style={{flexDirection: 'column'}}>
                            <Text
                              style={{
                                fontSize: 22,
                                left: 15,
                                fontFamily: 'Roboto-Regular',
                              }}>
                              Lorem Ipsum Dolor
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                left: 15,
                                fontFamily: 'Roboto-Light',
                              }}>
                              lorem ipsum dolor
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                              <Text
                                style={{
                                  fontSize: 24,
                                  left: 15,
                                  top: 18.6,
                                  fontFamily: 'Roboto-Regular',
                                }}>
                                $8.70
                              </Text>
                              <TouchableOpacity
                                style={styles.button}
                                title={'+ 1 -'}>
                                <View style={{flexDirection: 'row'}}>
                                  <Text
                                    style={{
                                      color: '#ff1496',
                                      fontSize: 18,
                                      top: -5,
                                      left: 5,
                                    }}>
                                    -
                                  </Text>
                                  <Text
                                    style={{
                                      color: 'black',
                                      fontSize: 15,
                                      left: 18,
                                      top: -2,
                                    }}>
                                    {' '}
                                    1
                                  </Text>
                                  <Text
                                    style={{
                                      color: '#ff1496',
                                      fontSize: 15,
                                      top: -2,
                                      left: 28,
                                    }}>
                                    {' '}
                                    +{' '}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            </View>

                            <View style={styles.text1}>
                              <Text
                                style={{
                                  color: '#ff1496',
                                  fontSize: 15,
                                  left: 15,
                                  fontFamily: 'Roboto-Regular',
                                }}>
                                Remove
                              </Text>
                              <Text
                                style={{
                                  color: '#ff1496',
                                  left: 86,
                                  fontSize: 15,
                                  fontFamily: 'Roboto-Regular',
                                }}>
                                Move to Wishlist
                              </Text>
                            </View>
                          </View>
                          <View />
                        </View>
                        <View
                          style={{
                            borderBottomColor: 'lightgray',
                            borderBottomWidth: 1,
                            padding: 2,
                            marginLeft: 20,
                            marginRight: 20,
                          }}
                        />
                        <View style={styles.flatlist}>
                          <Image
                            source={require('../src/image2x.png')}
                            style={{
                              height: windowWidth * 0.32,
                              width: windowWidth * 0.274,
                            }}
                          />
                          <View style={{flexDirection: 'column'}}>
                            <Text
                              style={{
                                fontSize: 22,
                                left: 15,
                                fontFamily: 'Roboto-Regular',
                              }}>
                              Lorem Ipsum Dolor
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                left: 15,
                                fontFamily: 'Roboto-Light',
                              }}>
                              lorem ipsum dolor
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                              <Text
                                style={{
                                  fontSize: 24,
                                  left: 15,
                                  top: 18.6,
                                  fontFamily: 'Roboto-Regular',
                                }}>
                                $8.70
                              </Text>
                              <TouchableOpacity
                                style={styles.button}
                                title={'+ 1 -'}>
                                <View style={{flexDirection: 'row'}}>
                                  <Text
                                    style={{
                                      color: '#ff1496',
                                      fontSize: 18,
                                      top: -5,
                                      left: 5,
                                    }}>
                                    -
                                  </Text>
                                  <Text
                                    style={{
                                      color: 'black',
                                      fontSize: 15,
                                      left: 18,
                                      top: -2,
                                    }}>
                                    {' '}
                                    1
                                  </Text>
                                  <Text
                                    style={{
                                      color: '#ff1496',
                                      fontSize: 15,
                                      top: -2,
                                      left: 28,
                                    }}>
                                    {' '}
                                    +{' '}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            </View>

                            <View style={styles.text1}>
                              <Text
                                style={{
                                  color: '#ff1496',
                                  fontSize: 15,
                                  left: 15,
                                  fontFamily: 'Roboto-Regular',
                                }}>
                                Remove
                              </Text>
                              <Text
                                style={{
                                  color: '#ff1496',
                                  left: 86,
                                  fontSize: 15,
                                  fontFamily: 'Roboto-Regular',
                                }}>
                                Move to Wishlist
                              </Text>
                            </View>
                          </View>
                          <View />
                        </View>
                        <View
                          style={{
                            borderBottomColor: 'lightgray',
                            borderBottomWidth: 1,
                            padding: 2,
                            marginLeft: 20,
                            marginRight: 20,
                          }}
                        />
                        <View style={styles.flatlist}>
                          <Image
                            source={require('../src/image2x.png')}
                            style={{
                              height: windowWidth * 0.32,
                              width: windowWidth * 0.274,
                            }}
                          />
                          <View style={{flexDirection: 'column'}}>
                            <Text
                              style={{
                                fontSize: 22,
                                left:15,
                                fontFamily: 'Roboto-Regular',
                              }}>
                              Lorem Ipsum Dolor
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                left: 15,
                                fontFamily: 'Roboto-Light',
                              }}>
                              lorem ipsum dolor
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                              <Text
                                style={{
                                   fontSize: 24,
                                   left: 15,
                                   top: 18.6,
                                  fontFamily: 'Roboto-Regular',
                                }}>
                                $8.70
                              </Text>
                              <TouchableOpacity
                                style={styles.button}
                                title={'+ 1 -'}>
                                <View style={{flexDirection: 'row'}}>
                                  <Text
                                    style={{
                                      color: '#ff1496',
                                      fontSize: 18,
                                      top: -5,
                                      left: 5,
                                    }}>
                                    -
                                  </Text>
                                  <Text
                                    style={{
                                      color: 'black',
                                      fontSize: 15,
                                      left: 18,
                                      top: -2,
                                    }}>
                                    {' '}
                                    1
                                  </Text>
                                  <Text
                                    style={{
                                      color: '#ff1496',
                                      fontSize: 15,
                                      top: -2,
                                      left: 28,
                                    }}>
                                    {' '}
                                    +{' '}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            </View>

                            <View style={styles.text1}>
                              <Text
                                style={{
                                  left: 15,
                                  color: '#ff1496',
                                  fontSize: 15,
                                  fontFamily: 'Roboto-Regular',
                                }}>
                                Remove
                              </Text>
                              <Text
                                style={{
                                  color: '#ff1496',
                                  left: 91,
                                  fontSize: 15,
                                  fontFamily: 'Roboto-Regular',
                                }}>
                                Move to Wishlist
                              </Text>
                            </View>
                          </View>
                          <View />
                        </View>
                        <View
                          style={{
                            borderBottomColor: 'lightgray',
                            borderBottomWidth: 1,
                            padding: 2,
                            marginLeft: 20,
                            marginRight: 20,
                          }}
                        />
                      </View>
                    );
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.13,
    backgroundColor: '#ff1496',
    flexDirection: 'row',
  },
  logo: {
    top: 39,
    left: 10,
    paddingLeft: 30,
    height: 20,
    width: 1,
    tintColor: 'white',
  },
  headerTextStyle: {
    fontSize: 26,
    color: 'white',
    fontFamily: 'BalsamiqSans-Bold',
    top: 30,
    paddingLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
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
  icons: {
    flexDirection: 'row',
    top: 40,
  },
  flatlist: {
    flexDirection: 'row',
    padding: 16,
  },
  text1: {
    top: 26,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'lightgray',
    padding: 5,
    width: 80,
    height: 30,
    borderRadius: 20,
    top: 18.6,
    left: 114,
  },
  icon1: {
    left: 90,
  },
  icon2: {
    left: 110,
  },
  icon3: {
    left: 125,
  },
});
