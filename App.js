import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/Home';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftSrceen from './screens/SpaceCraft';
import StarMapScreen from './screens/StarMap';

//criando um stack para todas as telas
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="SpaceCraft" component={SpaceCraftSrceen}/>
                <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
                <Stack.Screen name="StarMap" component={StarMapScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}