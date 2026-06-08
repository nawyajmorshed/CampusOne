import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { SectorColors, Radius, FontFamily, FontSize, Spacing } from '../../theme';
import type { SectorKey } from '../../theme';

const SECTOR_EMOJI: Record<SectorKey, string> = {
  reports: '🔧',
  lostfound: '🔍',
  events: '🎉',
  announcements: '📢',
  blood: '🩸',
  bus: '🚌',
  jobs: '💼',
  marketplace: '🛒',
  rides: '🚗',
  directory: '👥',
  medical: '🏥',
  prayer: '🕌',
  clubs: '🎭',
  studyhub: '📚',
  faculty: '👨‍🏫',
};

const SECTOR_LABEL: Record<SectorKey, string> = {
  reports: 'Reports',
  lostfound: 'Lost & Found',
  events: 'Events',
  announcements: 'Notice',
  blood: 'Blood',
  bus: 'Bus',
  jobs: 'Jobs',
  marketplace: 'Market',
  rides: 'Rides',
  directory: 'Directory',
  medical: 'Medical',
  prayer: 'Prayer',
  clubs: 'Clubs',
  studyhub: 'Study Hub',
  faculty: 'Faculty',
};

interface SectorIconProps {
  sector: SectorKey;
  onPress?: () => void;
  size?: number;
  showLabel?: boolean;
  style?: ViewStyle;
}

export function SectorIcon({ sector, onPress, size = 56, showLabel = true, style }: SectorIconProps) {
  const { C } = useTheme();
  const color = SectorColors[sector];
  const iconBg = color + '20'; // 12% opacity

  const content = (
    <View style={[styles.wrapper, style]}>
      <View
        style={[
          styles.iconBox,
          {
            width: size,
            height: size,
            borderRadius: size * 0.32,
            backgroundColor: iconBg,
          },
        ]}
      >
        <Text style={{ fontSize: size * 0.44 }}>{SECTOR_EMOJI[sector]}</Text>
      </View>
      {showLabel ? (
        <Text
          style={[
            styles.label,
            { color: C.textSecondary, fontFamily: FontFamily.jakartaMedium, fontSize: FontSize.xs },
          ]}
          numberOfLines={1}
        >
          {SECTOR_LABEL[sector]}
        </Text>
      ) : null}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.72}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  wrapper: { alignItems: 'center', gap: 6 } as ViewStyle,
  iconBox: { alignItems: 'center', justifyContent: 'center' } as ViewStyle,
  label: { textAlign: 'center', maxWidth: 70 } as any,
});
