import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { COLOR_ACCENT, COLOR_PRIMARY, AppStyles } from "./AppStyles";
import { initializeApp, getApps } from "firebase/app";
import { EntryStackScreen } from "./screens/EntryStackScreen";

// TODO: Make sure to create a file called "keys.json" in your project
// directory & add your Firebase configuration keys to that file.
// We add this file to our gitignore, since we don't want this to be
// published on Version Control.
const firebaseConfig = require("./keys.json");

if (getApps().length == 0) {
  initializeApp(firebaseConfig);
}

// Theme Object for React Native Paper
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR_PRIMARY,
    accent: COLOR_ACCENT,
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: "Georgia", // Set Georgia for regular text
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Georgia", // Set Georgia for medium text
      fontWeight: "500",
    },
    light: {
      fontFamily: "Georgia", // Set Georgia for light text
      fontWeight: "300",
    },
    thin: {
      fontFamily: "Georgia", // Set Georgia for thin text
      fontWeight: "100",
    },
  },
};

export default function App() {
  // To use React Native Paper, we wrap our EntryStackScreen in
  // PaperProvider.
  // Learn More: https://callstack.github.io/react-native-paper/getting-started.html#usage
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <EntryStackScreen style={AppStyles.container} />
      </PaperProvider>
    </SafeAreaProvider>
    
  );
}
