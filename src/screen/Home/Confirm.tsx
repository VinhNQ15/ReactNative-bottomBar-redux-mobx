import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/Type';
import { StackNavigationProp } from '@react-navigation/stack';

type ConfirmNavigationProp = StackNavigationProp<RootStackParamList, 'Confirm'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Confirm'>;

interface PropsDetail {
  navigation: ConfirmNavigationProp;
  route: DetailsScreenRouteProp;
}

const Confirm: React.FC<PropsDetail> = ({ navigation, route }) => {

  useEffect(() => {

  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Confirm</Text>

      <TouchableOpacity style={{ marginTop: 30, marginBottom: 10, backgroundColor: 'green', padding: 10, borderRadius: 10 }}
        onPress={() => navigation.navigate('Result')}>
        <Text>Go Result</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 30, marginBottom: 10, backgroundColor: 'green', padding: 10, borderRadius: 10 }}
        onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Confirm;