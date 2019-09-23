import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthSession } from 'expo';

const FB_APP_ID = '907029613003218';

class Logo extends Component {
  render(){
  return (
    <View>
      <Text>Astromate</Text>  
    </View>
    )
  }
}


class Quicklinks extends Component {
  render(){
    return (
      <View>
        <Text>Privacy Policy</Text>
        <Text>Terms of Service</Text>
      </View>
    )
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text>Open up App.js to start working on your app!</Text>
      <Quicklinks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
