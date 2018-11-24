import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';

import { createDrawerNavigator, DrawerItems } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const { width } = Dimensions.get('window');

class App extends React.Component {
   render() {
      return (
         <AppDrawerNavigator />
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
   avatarImage: {
     width: 120,
     height: 120,
     borderRadius: 60,
   },
   welcomeImage: {
     width: 100,
     height: 80,
     resizeMode: 'contain',
     marginTop: 3,
     marginLeft: -10,
   },
});


const CustomDrawerComponent = (props) => (
   <SafeAreaView style={{flex:1}}>
      <View style={{height:150,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
          <Image
            source={
              __DEV__
                ? require('./assets/images/robot-dev.png')
                : require('./assets/images/robot-prod.png')
            }
            style={styles.avatarImage}
          />
      </View>
      <ScrollView>
         <DrawerItems {...props} />

      </ScrollView>
   </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
   Home: HomeScreen,
   Settings: SettingsScreen

}, {
   contentComponent: CustomDrawerComponent,
   drawerWidth: width,
   contentOptions: {
      activeTintColor: 'orange'
   }
});

export default App;
