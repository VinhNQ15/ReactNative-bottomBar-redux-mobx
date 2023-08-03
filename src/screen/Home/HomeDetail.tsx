import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HomeStackProps } from '../../Navigation/RootInterface';
import { useRoute } from "@react-navigation/native";
import { useState } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/Type';
import { StackNavigationProp } from '@react-navigation/stack';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'HomeDetail'>;
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeDetail'>;

interface PropsDetail {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
}

const HomeDetail: React.FC<PropsDetail> = ({ route, navigation }) => {
  const [testData, setTestData] = useState<any>('');

  useEffect(() => {
    setTestData(route.params.testData);
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{testData}</Text>

      <TouchableOpacity style={{ marginTop: 30, marginBottom: 10, backgroundColor: 'green', padding: 10, borderRadius: 10 }}
        onPress={() => navigation.navigate('Confirm', { testNumber: 123 })}>
        <Text>Go Confirm</Text>
      </TouchableOpacity>


      <TouchableOpacity style={{ marginTop: 30, marginBottom: 10, backgroundColor: 'green', padding: 10, borderRadius: 10 }}
        onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>

    </View>
  );
}

export default HomeDetail;