import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { supabase } from '../../lib/supabase';
import { useTheme } from '../../hooks/useTheme';
import { Screen } from '../../components/layout/Screen';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { FontFamily, FontSize, Spacing } from '../../theme';
import type { AuthStackParams } from '../../types/navigation';

type Nav = NativeStackNavigationProp<AuthStackParams, 'Register'>;

interface FormState {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

export function RegisterScreen() {
  const nav = useNavigation<Nav>();
  const { C } = useTheme();

  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  function field(key: keyof FormState) {
    return (value: string) => setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: FormErrors = {};
    if (!form.fullName.trim()) next.fullName = 'Full name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) next.email = 'Enter a valid email';
    if (form.password.length < 8) next.password = 'Password must be at least 8 characters';
    if (form.password !== form.confirmPassword) next.confirmPassword = 'Passwords do not match';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleRegister() {
    if (!validate()) return;
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: form.email.trim(),
      password: form.password,
      options: { data: { full_name: form.fullName.trim() } },
    });
    setLoading(false);
    if (error) {
      Alert.alert('Registration Failed', error.message);
    } else {
      Alert.alert(
        'Check your email',
        'We sent you a confirmation link. Please verify your email before signing in.',
        [{ text: 'OK', onPress: () => nav.navigate('Login') }],
      );
    }
  }

  return (
    <Screen keyboardAvoid scrollable>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.goBack()} hitSlop={12}>
          <Text style={{ color: C.brand, fontSize: 28 }}>‹</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.title, { color: C.text, fontFamily: FontFamily.jakartaBold }]}>
        Create account
      </Text>
      <Text style={[styles.sub, { color: C.textSecondary, fontFamily: FontFamily.jakartaRegular }]}>
        Join your campus community
      </Text>

      <View style={styles.form}>
        <Input
          label="Full Name"
          value={form.fullName}
          onChangeText={field('fullName')}
          autoCapitalize="words"
          error={errors.fullName}
          placeholder="John Doe"
        />
        <Input
          label="Email"
          value={form.email}
          onChangeText={field('email')}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          error={errors.email}
          placeholder="your@email.com"
        />
        <Input
          label="Password"
          value={form.password}
          onChangeText={field('password')}
          secureTextEntry
          autoComplete="new-password"
          error={errors.password}
          placeholder="Min. 8 characters"
          hint="Use a mix of letters, numbers and symbols"
        />
        <Input
          label="Confirm Password"
          value={form.confirmPassword}
          onChangeText={field('confirmPassword')}
          secureTextEntry
          error={errors.confirmPassword}
          placeholder="Repeat password"
        />
      </View>

      <Button label="Create Account" onPress={handleRegister} loading={loading} fullWidth size="lg" />

      <View style={styles.footer}>
        <Text style={{ color: C.textSecondary, fontFamily: FontFamily.jakartaRegular, fontSize: FontSize.sm }}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => nav.navigate('Login')}>
          <Text style={{ color: C.brand, fontFamily: FontFamily.jakartaSemiBold, fontSize: FontSize.sm }}>
            Sign in
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
