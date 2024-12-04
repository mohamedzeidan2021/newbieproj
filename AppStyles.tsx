import { StyleSheet } from "react-native";

export const COLOR_PRIMARY = "#003262";
export const COLOR_ACCENT = "#dfe6e9";
export const COLOR_LIGHT = "#dfe6e9";
export const COLOR_DARK = "#2d3436";
export const COLOR_BACKGROUND = "#ffffff";

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },
  h1: {
    fontFamily: 'Georgia',
    fontSize: 32,
  },
  h2: {
    fontFamily: 'Georgia',
    fontSize: 24,
  },
  h3: {
    fontFamily: 'Georgia',
    fontSize: 20,
  },
  body: {
    fontFamily: 'Georgia',
    fontSize: 14,
  },
});
