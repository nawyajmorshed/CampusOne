import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../hooks/useTheme';
import { FontFamily, FontSize, Spacing, Layout } from '../../theme';

interface TopBarProps {
  title: string;
  showBack?: boolean;
  rightSlot?: React.ReactNode;
  style?: ViewStyle;
}

export function TopBar({ title, showBack = false, rightSlot, style }: TopBarProps) {
  const { C } = useTheme();
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.bar,
        {
          backgroundColor: C.surface,
          borderBottomColor: C.border,
          paddingHorizontal: Layout.screenPadding,
        },
        style,
      ]}
    >
      <View style={styles.left}>
        {showBack ? (
          <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={8}>
            <Text style={{ color: C.brand, fontSize: FontSize.xl }}>‹</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <Text
        style={[styles.title, { color: C.text, fontFamily: FontFamily.jakartaSemiBold }]}
        numberOfLines={1}
      >
        {title}
      </Text>

      <View style={styles.right}>{rightSlot ?? null}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  } as ViewStyle,
  left: { width: 36, alignItems: 'flex-start' } as ViewStyle,
  title: { flex: 1, fontSize: FontSize.lg, textAlign: 'center' } as any,
  right: { width: 36, alignItems: 'flex-end' } as ViewStyle,
});
