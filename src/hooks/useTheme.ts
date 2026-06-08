// ─────────────────────────────────────────────────────────────────────────────
// useTheme — returns the correct color palette based on device color scheme.
// Usage:  const { C, isDark } = useTheme();
//         style={{ backgroundColor: C.surface, color: C.text }}
// ─────────────────────────────────────────────────────────────────────────────

import { useColorScheme } from 'react-native';
import { LightColors, DarkColors } from '../theme';
import type { Colors } from '../theme';

export function useTheme(): { C: Colors; isDark: boolean } {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  return { C: isDark ? DarkColors : LightColors, isDark };
}
