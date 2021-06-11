import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import land from '../src/landingScreen';
class tabHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('land')}
          style={styles.button}>
          <Text>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default tabHome;
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
