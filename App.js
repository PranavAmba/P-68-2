import * as React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Facebook from './screens/fb.js';
import Instagram from './screens/in.js'

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <AppContainer></AppContainer>     
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  Instagram:Instagram,
  Facebook:Facebook
})
const AppContainer = createAppContainer(TabNavigator)