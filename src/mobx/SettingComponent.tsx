import React from 'react';
import { View, Text, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import MobxStore from './MobxStore';

const SettingComponent: React.FC = observer(() => {

    return (
        <View>
            <Text>Count: {MobxStore.count}</Text>
            <Button title="Increment" onPress={MobxStore.increment} />
            <Button title="Decrement" onPress={MobxStore.decrement} />
        </View>
    )
});

export default SettingComponent;
