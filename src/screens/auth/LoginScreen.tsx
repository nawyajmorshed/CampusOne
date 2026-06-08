import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, type ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { supabase } from '../../lib/supabase';
import { useTheme } from '../../hooks/useTheme';
import { Screen } from '../../components/layout/Screen';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { FontFamily, FontSize, Spacing } from '../../theme';
import type { AuthStackParams } from '../../types/navigation';

type Nav = NativeStackNavigationProp<AuthStackParams, 'Login'>;

export function LoginScreen() {
  const nav = useNavigation<Nav>();
  const { C } = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  function validate(): boolean {
    const next: typeof errors = {};
    if (!email.trim()) next.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) next.email = 'Enter a valid email';
    if (!password) next.password = 'Password is required';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleLogin() {
    if (!validate()) return;
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setLoading(false);
    if (error) Alert.alert('Login Failed', error.message);
  }

  return (
    <Screen keyboardAvoid scrollable>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.goBack()} hitSlop={12}>
          <Text style={{ color: C.brand, fontSize: 28 }}>‹</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.title, { color: C.text, fontFamily: FontFamily.jakartaBold }]}>
        Welcome back
      </Text>
      <Text style={[styles.sub, { color: C.textSecondary, fontFamily: FontFamily.jakartaRegular }]}>
        Sign in to your CampusOne account
      </Text>

      <View style={styles.form}>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          error={errors.email}
          placeholder="your@email.com"
        />
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoComplete="current-password"
          error={errors.password}
          placeholder="••••••••"
        />
      </View>

      <Button label="Sign In" onPress={handleLogin} loading={loading} fullWidth size="lg" />

      <View style={styles.footer}>
        <Text style={{ color: C.textSecondary, fontFamily: FontFamily.jakartaRegular, fontSize: FontSize.sm }}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => nav.navigate('Register')}>
          <Text style={{ color: C.brand, fontFamily: FontFamily.jakartaSemiBold, fontSize: FontSize.sm }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { marginBottom: Spacing[6] } as ViewStyle,
  title: { fontSize: 28, marginBottom: 6 } as any,
  sub: { fontSize: 15, marginBottom: Spacing[8] } as any,
  form: { gap: Spacing[5], marginBottom: Spacing[7] } as ViewStyle,
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: Spacing[7] } as ViewStyle,
});
