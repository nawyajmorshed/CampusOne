import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../hooks/useTheme';
import { FontFamily, FontSize, Layout } from '../theme';
import type { BottomTabParams } from '../types/navigation';

import { HomeScreen } from '../screens/main/HomeScreen';
import { ExploreScreen } from '../screens/main/ExploreScreen';
import { NotificationsScreen } from '../screens/main/NotificationsScreen';
import { ProfileScreen } from '../screens/main/ProfileScreen';

const Tab = createBottomTabNavigator<BottomTabParams>();

const TAB_ICONS: Record<keyof BottomTabParams, { active: string; inactive: string }> = {
  Home: { active: '🏠', inactive: '🏡' },
  Explore: { active: '🧭', inactive: '🗺️' },
  Notifications: { active: '🔔', inactive: '🔕' },
  Profile: { active: '👤', inactive: '👤' },
};

function TabIcon({ name, focused }: { name: keyof BottomTabParams; focused: boolean }) {
  return (
    <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.55 }}>
      {focused ? TAB_ICONS[name].active : TAB_ICONS[name].inactive}
    </Text>
  );
}

export function BottomTabNavigator() {
  const { C } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: C.surface,
          borderTopColor: C.border,
          height: Layout.bottomNavHeight,
          paddingBottom: 16,
          paddingTop: 8,
        },
        tabBarActiveTintColor: C.brand,
        tabBarInactiveTintColor: C.textMuted,
        tabBarLabelStyle: {
          fontFamily: FontFamily.jakartaMedium,
          fontSize: FontSize.xs,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="Home" focused={focused} /> }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="Explore" focused={focused} /> }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="Notifications" focused={focused} /> }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="Profile" focused={focused} /> }}
      />
    </Tab.Navigator>
  );
}
