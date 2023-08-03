// App.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { globalStore } from '../mobx';
import SettingComponent from '../mobx/SettingComponent';
import { observer } from 'mobx-react-lite';
import MobxStore from '../mobx/MobxStore';

const SettingsScreen: React.FC = observer(() => {

  return (
    <View style={styles.container}>
      <Text>Count: {MobxStore.count}</Text>
      <Button title="Increment" onPress={MobxStore.increment} />
      <Button title="Decrement" onPress={MobxStore.decrement} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default SettingsScreen;
