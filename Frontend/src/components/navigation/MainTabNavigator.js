import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JournalScreen from '../screens/JournalScreen';
import CreateJournalScreen from '../screens/CreateJournalScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Journals" component={JournalScreen} />
      <Tab.Screen name="Create Journal" component={CreateJournalScreen} />
    </Tab.Navigator>
  );
}
