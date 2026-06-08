import React from 'react';
import { View, Text, FlatList, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Screen } from '../../components/layout/Screen';
import { SectorIcon } from '../../components/ui/SectorIcon';
import { FontFamily, FontSize, Spacing } from '../../theme';
import type { SectorKey } from '../../theme';

const ALL_SECTORS: SectorKey[] = [
  'reports', 'lostfound', 'events', 'announcements',
  'blood', 'bus', 'jobs', 'marketplace',
  'rides', 'directory', 'medical', 'prayer',
  'clubs', 'studyhub', 'faculty',
];

export function ExploreScreen() {
  const { C } = useTheme();

  return (
    <Screen noPadding>
      <View style={[styles.header, { paddingHorizontal: Spacing[4] }]}>
        <Text style={[styles.title, { color: C.text, fontFamily: FontFamily.jakartaBold }]}>
          Explore
        </Text>
        <Text style={[styles.sub, { color: C.textSecondary, fontFamily: FontFamily.jakartaRegular }]}>
          All campus services in one place
        </Text>
      </View>

      <FlatList
        data={ALL_SECTORS}
        keyExtractor={(s) => s}
        numColumns={3}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.cell}>
            <SectorIcon sector={item} size={60} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { paddingTop: Spacing[5], paddingBottom: Spacing[5] } as ViewStyle,
  title: { fontSize: FontSize['2xl'] } as any,
  sub: { fontSize: FontSize.sm, marginTop: 4 } as any,
  grid: { paddingHorizontal: Spacing[4], paddingBottom: 110 } as ViewStyle,
  row: { justifyContent: 'space-between', marginBottom: Spacing[7] } as ViewStyle,
  cell: { flex: 1, alignItems: 'center' } as ViewStyle,
});
