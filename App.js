import React from 'react';
import { View, Text, TextInput, Image, ImageBackground, Dimensions } from 'react-native';
import DefaultPage from './src/Screens/DefaultPage';
import Login from './src/Screens/Login'
import Signup from './src/Screens/Signup';
import ConfirmCode from './src/Screens/ConfirmCode';
import Preferences from './src/Screens/Preferences';
import Home from './src/Screens/Home';
import BusesList from './src/Screens/BusesList';
import SearchLocations from './src/Screens/SearchLocations';
import MenuDrawer from './src/Components/MenuDrawer';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class App extends React.Component {
  render() {

    const MyDrawerContent = ({navigation}) => {
        return (
            <View style={{ flex: 1 }}>
                <MenuDrawer navigation={navigation} />
            </View>
        );
    }

    function MyDrawer() {
      return (
        <Drawer.Navigator drawerType='back' edgeWidth={100} drawerStyle={{
          width: WIDTH*0.75,
          height: HEIGHT,
        }} drawerContent={MyDrawerContent}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Search" component={SearchLocations} />
          <Drawer.Screen name="BusesList" component={BusesList} />
        </Drawer.Navigator>
      );
    }

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={MyDrawer}>
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
          <Stack.Screen name="DefaultPage" component={DefaultPage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Preferences" component={Preferences} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}