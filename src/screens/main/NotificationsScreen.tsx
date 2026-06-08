import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Screen } from '../../components/layout/Screen';
import { FontFamily, FontSize } from '../../theme';

export function NotificationsScreen() {
  const { C } = useTheme();
  return (
    <Screen>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        <Text style={{ fontSize: 48 }}>🔔</Text>
        <Text style={{ color: C.text, fontFamily: FontFamily.jakartaSemiBold, fontSize: FontSize.lg }}>
          Notifications
        </Text>
        <Text style={{ color: C.textMuted, fontFamily: FontFamily.jakartaRegular, fontSize: FontSize.sm, textAlign: 'center' }}>
          You're all caught up! No new notifications.
        </Text>
      </View>
    </Screen>
  );
}
