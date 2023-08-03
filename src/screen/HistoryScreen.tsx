import React from 'react';
import { View, Text, Button, TextInput,StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import store, { AppDispatch } from '../redux/store'
import { RootState } from '../redux/rootReducer';
import { increment, decrement } from '../redux/counterSlice';
import { updateUserName } from '../redux/changeSlice';
import MobxStore from '../mobx/MobxStore';

const HistoryScreen = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const counter = useSelector((state: RootState) => state.counter.value);
  const userName = useSelector((state: RootState) => state.user.name);
  const dispatch: AppDispatch = useDispatch();

  const handleUpdateUserName = () => {
    dispatch(updateUserName(text)); // Gửi action để cập nhật tên người dùng
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Counter: {counter}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}/>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Update User Name" onPress={handleUpdateUserName} />


      <Button title="Increment" onPress={MobxStore.increment} />
      <Button title="Decrement" onPress={MobxStore.decrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default HistoryScreen;
