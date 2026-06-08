// ─────────────────────────────────────────────────────────────────────────────
// CampusOne — Color Tokens
// Single source of truth. Change here → changes everywhere in the app.
// ─────────────────────────────────────────────────────────────────────────────

export const LightColors = {
  // Brand
  brand:    '#2b5be3',
  brand700: '#1f47c4',
  brand50:  '#eef3ff',
  brand100: '#dde7ff',

  // Backgrounds
  bg:       '#f5f7fb',
  surface:  '#ffffff',
  surface2: '#eef2f8',
  surface3: '#e6ebf3',

  // Borders
  border:  '#e4e9f1',
  border2: '#d4dce8',

  // Text
  text:  '#0f1a2e',
  text2: '#46536e',
  text3: '#8693aa',

  // Semantic — Success
  success:   '#12915e',
  successBg: '#e3f5ec',

  // Semantic — Warning
  warn:   '#b9760a',
  warnBg: '#fbefdb',

  // Semantic — Danger
  danger:   '#d63d35',
  dangerBg: '#fbe7e5',

  // Semantic — Info (same as brand)
  info:   '#2b5be3',
  infoBg: '#eef3ff',

  // Role accent colors
  roleStudent: '#2b5be3',
  roleStaff:   '#b9760a',
  roleAdmin:   '#12915e',

  // Utility
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
};

export const DarkColors: typeof LightColors = {
  // Brand
  brand:    '#6a8cf2',
  brand700: '#8aa4f7',
  brand50:  '#1a2340',
  brand100: '#222d4e',

  // Backgrounds
  bg:       '#0a0f1c',
  surface:  '#111829',
  surface2: '#182034',
  surface3: '#202a42',

  // Borders
  border:  '#232f48',
  border2: '#2e3b58',

  // Text
  text:  '#e9eefb',
  text2: '#a4b1cc',
  text3: '#6c7a99',

  // Semantic — Success
  success:   '#36c98a',
  successBg: '#0d2e20',

  // Semantic — Warning
  warn:   '#e0a23c',
  warnBg: '#2e1e05',

  // Semantic — Danger
  danger:   '#f0685e',
  dangerBg: '#2e0d0b',

  // Semantic — Info
  info:   '#6a8cf2',
  infoBg: '#1a2340',

  // Role accent colors
  roleStudent: '#6a8cf2',
  roleStaff:   '#e0a23c',
  roleAdmin:   '#36c98a',

  // Utility
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
};

// ─────────────────────────────────────────────────────────────────────────────
// Sector icon colors — one unique color per campus feature
// ─────────────────────────────────────────────────────────────────────────────
export const SectorColors = {
  reports:      '#e05c2d',
  lostfound:    '#c49a14',
  events:       '#7c3abf',
  announcements:'#1a6dbf',
  blood:        '#c7344a',
  bus:          '#1e8c5a',
  jobs:         '#2b7abd',
  marketplace:  '#d4720c',
  rides:        '#1b7a9e',
  directory:    '#4a7fc1',
  medical:      '#2e9e6e',
  prayer:       '#1f8a5b',
  clubs:        '#9b3dbf',
  studyhub:     '#2ba0c9',
  faculty:      '#5a6abf',
} as const;

export type SectorKey = keyof typeof SectorColors;
export type Colors = typeof LightColors;
