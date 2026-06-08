import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Radius, Spacing, FontFamily, FontSize, Layout } from '../../theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
}

export function Input({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  containerStyle,
  ...props
}: InputProps) {
  const { C } = useTheme();
  const [focused, setFocused] = useState(false);

  const borderColor = error ? C.error : focused ? C.brand : C.border;

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text style={[styles.label, { color: C.textSecondary, fontFamily: FontFamily.jakartaMedium }]}>
          {label}
        </Text>
      ) : null}
      <View
        style={[
          styles.inputRow,
          {
            backgroundColor: C.surface,
            borderColor,
            borderRadius: Radius.sm,
            height: Layout.inputHeight,
          },
        ]}
      >
        {leftIcon ? <View style={styles.iconLeft}>{leftIcon}</View> : null}
        <TextInput
          {...props}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
          style={[
            styles.input,
            {
              color: C.text,
              fontFamily: FontFamily.jakartaRegular,
              fontSize: FontSize.md,
              paddingLeft: leftIcon ? 0 : Spacing[4],
              paddingRight: rightIcon ? 0 : Spacing[4],
            },
            props.style,
          ]}
          placeholderTextColor={C.textMuted}
        />
        {rightIcon ? <View style={styles.iconRight}>{rightIcon}</View> : null}
      </View>
      {error ? (
        <Text style={[styles.helper, { color: C.error, fontFamily: FontFamily.jakartaRegular }]}>
          {error}
        </Text>
      ) : hint ? (
        <Text style={[styles.helper, { color: C.textMuted, fontFamily: FontFamily.jakartaRegular }]}>
          {hint}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 6 } as ViewStyle,
  label: { fontSize: FontSize.sm } as any,
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    overflow: 'hidden',
  } as ViewStyle,
  input: { flex: 1 } as any,
  iconLeft: { paddingLeft: Spacing[4] } as ViewStyle,
  iconRight: { paddingRight: Spacing[4] } as ViewStyle,
  helper: { fontSize: FontSize.xs } as any,
});
