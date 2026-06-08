import React from 'react';
import { View, TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Radius, Shadows, Layout } from '../../theme';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  shadow?: keyof typeof Shadows;
  padding?: number;
}

export function Card({ children, onPress, style, shadow = 'sm', padding = Layout.cardPadding }: CardProps) {
  const { C } = useTheme();

  const cardStyle: ViewStyle = {
    backgroundColor: C.surface,
    borderRadius: Radius.md,
    padding,
    ...Shadows[shadow],
  };

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.82} onPress={onPress} style={[cardStyle, style]}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={[cardStyle, style]}>{children}</View>;
}
