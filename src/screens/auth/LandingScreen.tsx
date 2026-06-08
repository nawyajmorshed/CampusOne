import React from 'react';
import { View, Text, StyleSheet, Image, type ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../../components/ui/Button';
import { FontFamily, FontSize, Spacing, Radius } from '../../theme';
import type { AuthStackParams } from '../../types/navigation';

type Nav = NativeStackNavigationProp<AuthStackParams, 'Landing'>;

export function LandingScreen() {
  const nav = useNavigation<Nav>();
  const { C } = useTheme();

  return (
    <View style={[styles.root, { backgroundColor: C.bg }]}>
      {/* Brand blob */}
      <View style={[styles.blob, { backgroundColor: C.brand + '18' }]} />

      {/* Logo */}
      <View style={styles.logoArea}>
        <View style={[styles.logoBox, { backgroundColor: C.brand }]}>
          <Text style={styles.logoText}>C1</Text>
        </View>
        <Text style={[styles.appName, { color: C.text, fontFamily: FontFamily.jakartaBold }]}>
          CampusOne
        </Text>
        <Text style={[styles.tagline, { color: C.textSecondary, fontFamily: FontFamily.jakartaRegular }]}>
          Your campus, all in one place
        </Text>
      </View>

      {/* Feature previews */}
      <View style={styles.features}>
        {FEATURES.map((f) => (
          <View key={f.label} style={styles.featureRow}>
            <Text style={styles.featureEmoji}>{f.emoji}</Text>
            <Text style={[styles.featureLabel, { color: C.textSecondary, fontFamily: FontFamily.jakartaRegular }]}>
              {f.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <Button
          label="Get Started"
          onPress={() => nav.navigate('Register')}
          fullWidth
          size="lg"
        />
        <Button
          label="I already have an account"
          onPress={() => nav.navigate('Login')}
          variant="ghost"
          fullWidth
          size="lg"
          style={{ marginTop: Spacing[3] }}
        />
      </View>
    </View>
  );
}

const FEATURES = [
  { emoji: '📋', label: 'Submit & track campus reports' },
  { emoji: '🔍', label: 'Find lost items across campus' },
  { emoji: '📚', label: 'Join study groups & share notes' },
  { emoji: '🎭', label: 'Discover clubs & events' },
  { emoji: '🩸', label: 'Emergency blood requests' },
];

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: 24, justifyContent: 'space-between', paddingVertical: 60 } as ViewStyle,
  blob: { position: 'absolute', top: -80, right: -80, width: 280, height: 280, borderRadius: 140 } as ViewStyle,
  logoArea: { alignItems: 'center', gap: 12, marginTop: 40 } as ViewStyle,
  logoBox: { width: 80, height: 80, borderRadius: 22, alignItems: 'center', justifyContent: 'center' } as ViewStyle,
  logoText: { color: '#fff', fontSize: 28, fontFamily: 'System', fontWeight: '800' } as any,
  appName: { fontSize: 32 } as any,
  tagline: { fontSize: 15 } as any,
  features: { gap: 14 } as ViewStyle,
  featureRow: { flexDirection: 'row', alignItems: 'center', gap: 12 } as ViewStyle,
  featureEmoji: { fontSize: 20 } as any,
  featureLabel: { fontSize: 15 } as any,
  actions: { gap: 0 } as ViewStyle,
});
