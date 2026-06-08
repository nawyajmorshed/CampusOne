import React from 'react';
import { View, Text, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../store/authStore';
import { Screen } from '../../components/layout/Screen';
import { Avatar } from '../../components/ui/Avatar';
import { Card } from '../../components/ui/Card';
import { Pill } from '../../components/ui/Pill';
import { Button } from '../../components/ui/Button';
import { FontFamily, FontSize, Spacing } from '../../theme';

export function ProfileScreen() {
  const { C } = useTheme();
  const { profile, signOut } = useAuth();

  return (
    <Screen scrollable>
      <View style={styles.heroArea}>
        <Avatar uri={profile?.avatar_url} name={profile?.full_name} size="xl" />
        <Text style={[styles.name, { color: C.text, fontFamily: FontFamily.jakartaBold }]}>
          {profile?.full_name ?? 'Loading…'}
        </Text>
        {profile?.role ? (
          <Pill
            label={profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}
            variant={profile.role === 'admin' ? 'error' : profile.role === 'staff' ? 'warning' : 'brand'}
          />
        ) : null}
        {profile?.department ? (
          <Text style={{ color: C.textSecondary, fontFamily: FontFamily.jakartaRegular, fontSize: FontSize.sm }}>
            {profile.department}
          </Text>
        ) : null}
      </View>

      <Card style={{ marginBottom: Spacing[5] }}>
        <ProfileRow label="Email" value={profile?.email} C={C} />
        {profile?.intake ? <ProfileRow label="Intake" value={profile.intake} C={C} /> : null}
        {profile?.section ? <ProfileRow label="Section" value={profile.section} C={C} /> : null}
        {profile?.whatsapp ? <ProfileRow label="WhatsApp" value={profile.whatsapp} C={C} /> : null}
      </Card>

      <Button label="Sign Out" onPress={signOut} variant="danger" fullWidth />
    </Screen>
  );
}

function ProfileRow({ label, value, C }: { label: string; value?: string | null; C: any }) {
  if (!value) return null;
  return (
    <View style={styles.row}>
      <Text style={[styles.rowLabel, { color: C.textMuted, fontFamily: FontFamily.jakartaRegular }]}>
        {label}
      </Text>
      <Text style={[styles.rowValue, { color: C.text, fontFamily: FontFamily.jakartaMedium }]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heroArea: { alignItems: 'center', gap: 10, paddingVertical: Spacing[7] } as ViewStyle,
  name: { fontSize: FontSize.xl } as any,
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#00000011',
  } as ViewStyle,
  rowLabel: { fontSize: FontSize.sm } as any,
  rowValue: { fontSize: FontSize.sm } as any,
});
