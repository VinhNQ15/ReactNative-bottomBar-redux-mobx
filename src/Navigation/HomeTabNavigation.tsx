import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Image, Text
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import SettingsScreen from '../screen/SettingsScreen';
import Account from '../screen/Account/Account';
import HistoryScreen from '../screen/HistoryScreen';
import IMAGE from '../common/Images';
import HomeNavigation from './HomeNavigation';

const HomeTabNavigation: React.FC = () => {
  const _renderIcon = (routeName: String, selectedTab: String) => {
    let icon = IMAGE.ICON_HOME_ACTIVE;
    let title = 'Home';

    switch (routeName) {
      case 'HomeNavigation':
        title = 'Home';
        if (routeName === selectedTab) {
          icon = IMAGE.ICON_HOME_ACTIVE;
        } else {
          icon = IMAGE.ICON_HOME;
        }
        break;
      case 'Settings':
        title = 'Settings';
        if (routeName === selectedTab) {
          icon = IMAGE.ICON_ACOUNT_AVTIVE;
        } else {
          icon = IMAGE.ICON_ACOUNT;
        }
        break;
      case 'Account':
        title = 'Account';
        if (routeName === selectedTab) {
          icon = IMAGE.ICON_HISTORY_ACTIVE;
        } else {
          icon = IMAGE.ICON_HISTORY;
        }
        break;
      case 'History':
        title = 'History';
        if (routeName === selectedTab) {
          icon = IMAGE.ICON_EVENT_AVTIVE;
        } else {
          icon = IMAGE.ICON_EVENT;
        }
        break;
    }

    return (
      <View style={{ alignItems: 'center' }}>
        <Image source={icon} />
        <Text style={{ color: routeName === selectedTab ? 'black' : 'gray', fontSize: 11 }}>{title}</Text>
      </View>

    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }: { routeName: string; selectedTab: string; navigate: (route: string) => void }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={58}
      circleWidth={50}
      bgColor="orange"
      initialRouteName="HomeNavigation"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <View style={{ alignItems: 'center' }}>
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('Click Action')}>
              <Image source={IMAGE.ICON_SCAN_QR} />
            </TouchableOpacity>
          </Animated.View>
          <Image source={IMAGE.ICON_LOGO} style={{
            position: 'absolute',
            marginBottom: 3,
            bottom: 0, width: 50, height: 16
          }} />
        </View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBar.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        position="LEFT"
      />

      <CurvedBottomBar.Screen
        name="Settings"
        position="LEFT"
        component={SettingsScreen}
      />

      <CurvedBottomBar.Screen
        name="Account"
        component={Account}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="History"
        component={HistoryScreen}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 55,
    height: 55,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#179BE5',
    bottom: 23,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});

export default HomeTabNavigation;