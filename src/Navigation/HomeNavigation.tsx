import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/Home/HomeScreen';
import HomeDetail from '../screen/Home/HomeDetail';
import Confirm from '../screen/Home/Confirm';
import Result from '../screen/Home/Result';
import { RootStackParamList } from './Type';

const HomeStack = createStackNavigator<RootStackParamList>();

const HomeNavigation = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen} />
            <HomeStack.Screen
                name="HomeDetail"
                component={HomeDetail}/>
            <HomeStack.Screen
                name="Confirm"
                component={Confirm}/>
            <HomeStack.Screen
                name="Result"
                component={Result} />
        </HomeStack.Navigator>
    );
};

export default HomeNavigation;