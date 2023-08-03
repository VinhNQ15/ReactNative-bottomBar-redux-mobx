import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigation/Type';
import {useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const userName = useSelector((state:RootState) => state.user.name);
  const handleNavigate = () => {
    navigation.navigate('HomeDetail', { testData: 'test data truyền sang' }); // Truyền dữ liệu vào màn hình Destination
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
      <Text>Home Screen</Text>

      <TouchableOpacity style={{ marginTop: 30, marginBottom: 10, backgroundColor: 'green', padding: 10, borderRadius: 10 }}
        onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 30, marginBottom: 10, backgroundColor: 'green', padding: 10, borderRadius: 10 }}
        onPress={() => handleNavigate()}>
        <Text>Go Home Detail</Text>
      </TouchableOpacity>

      <Text>User Name: {userName}</Text>

    </View>
  );
}

export default HomeScreen;