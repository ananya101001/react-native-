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
class ImageScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Image Screen</Text>
      </View>
    );
  }
}
export default ImageScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
