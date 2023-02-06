import React, { components } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Navigator from 'C:/Users/Raffp/Desktop/React Native Projects/React_Native_WeatherApp2/WeatherApp2/components/navgation/navgation.js';
import { Context, Provider } from "./components/globalContext/globalContext.js";




function App(props) {

  return (
    <Provider>
      <View style={{flex:1}}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </View>
      </Provider>
 
    )





}

export default App;