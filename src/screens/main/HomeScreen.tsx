import React from 'react';
import { View, Text, ScrollView, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../store/authStore';
import { Screen } from '../../components/layout/Screen';
import { Avatar } from '../../components/ui/Avatar';
import { Card } from '../../components/ui/Card';
import { SectorIcon } from '../../components/ui/SectorIcon';
import { FontFamily, FontSize, Spacing, Layout } from '../../theme';
import type { SectorKey } from '../../theme';

const QUICK_SECTORS: SectorKey[] = ['reports', 'lostfound', 'announcements', 'events', 'studyhub'];

export function HomeScreen() {
  const { C } = useTheme();
  const { profile } = useAuth();

  const greeting = profile?.full_name
    ? `Hello, ${profile.full_name.split(' ')[0]} 👋`
    : 'Hello 👋';

  return (
    <Screen scrollable>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.greeting, { color: C.textSecondary, fontFamily: FontFamily.jakartaRegular }]}>
            {greeting}
          </Text>
          <Text style={[styles.title, { color: C.text, fontFamily: FontFamily.jakartaBold }]}>
            What do you need today?
          </Text>
        </View>
        <Avatar uri={profile?.avatar_url} name={profile?.full_name} size="md" />
      </View>

      {/* Quick access */}
      <Text style={[styles.sectionLabel, { color: C.text, fontFamily: FontFamily.jakartaSemiBold }]}>
        Quick Access
      </Text>
      <View style={styles.quickRow}>
        {QUICK_SECTORS.map((s) => (
          <SectorIcon key={s} sector={s} size={52} />
        ))}
      </View>

      {/* Placeholder feed */}
      <Text style={[styles.sectionLabel, { color: C.text, fontFamily: FontFamily.jakartaSemiBold }]}>
        Recent Activity
      </Text>
      <Card>
        <Text style={{ color: C.textMuted, fontFamily: FontFamily.jakartaRegular, fontSize: FontSize.sm }}>
          Your recent campus activity will appear here.
        </Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing[5],
    marginBottom: Spacing[7],
    gap: Spacing[3],
  } as ViewStyle,
  greeting: { fontSize: FontSize.sm } as any,
  title: { fontSize: FontSize['2xl'], lineHeight: 30 } as any,
  sectionLabel: { fontSize: FontSize.md, marginBottom: Spacing[4] } as any,
  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing[7],
  } as ViewStyle,
});
