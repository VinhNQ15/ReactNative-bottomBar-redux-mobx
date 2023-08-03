import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';


const Account: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('home');
  const { width: screenWidth } = Dimensions.get('window');

  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };

  const isTabSelected = (tab: string) => {
    return selectedTab === tab;
  };

  return (
    <View style={styles.container}>
      {/* Your main content */}
      {/* ... */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[styles.tabItem, isTabSelected('home') && styles.selectedTabItem]}
          onPress={() => handleTabPress('home')}
        >
          {/* Add your home tab content here */}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabItem, isTabSelected('search') && styles.selectedTabItem]}
          onPress={() => handleTabPress('search')}
        >
          {/* Add your search tab content here */}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabItem, isTabSelected('settings') && styles.selectedTabItem]}
          onPress={() => handleTabPress('settings')}
        >
          {/* Add your settings tab content here */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    backgroundColor: 'green', // Customize the background color
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderTopLeftRadius: 50 * 0.5, // Create the curved effect
    borderTopRightRadius: 50 * 0.5, // Create the curved effect
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  selectedTabItem: {
    backgroundColor: 'white', // Customize the selected tab color
    borderRadius: 25, // Create the circular effect for the selected tab
  },
});


export default Account;