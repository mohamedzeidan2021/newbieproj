import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen/HomeScreen.main";
import FeedScreen from "./FeedScreen/FeedScreen.main";
import DetailScreen from "./DetailScreen/DetailScreen.main";
import NewSocialScreen from "../NewSocialScreen/NewSocialScreen.main";
import ConfirmationScreen from "./ConfirmationScreen/ConfirmationScreen.main";
import { SocialModel } from "../../../models/social";
import { TouchableOpacity, Text } from "react-native";

export type MainStackParamList = {
  HomeScreen: undefined;
  FeedScreen: undefined;
  DetailScreen: { social: SocialModel };
  NewSocialScreen: undefined;
  ConfirmationScreen: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export function MainStackScreen() {
  return (
    // TODO: Ensure that the initial route that the navigator goes to is the HomeScreen (which is a screen you have to implement!)
    // See docs on stack navigator, what can we add as a prop into MainStack.Navigator to make sure that the HomeScreen is the initial route?
    // https://reactnavigation.org/docs/2.x/stack-navigator/

    <MainStack.Navigator initialRouteName="HomeScreen"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Georgia", // Applies Georgia to all header titles
          fontSize: 20,          // Adjust size if needed
          color: "#003262",      // Optional color
        },
        
      }}
      >
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <MainStack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={({ navigation }) => ({
          title: "Socials",
          headerLeft: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
              >
              <Text
                style={{
                  padding:15,
                  fontFamily: "Georgia", // Georgia font for button text
                  fontSize: 16,
                  color: "#003262", // Optional: White text
                }}
              >
                Home
              </Text>
            </TouchableOpacity>
          ),
          headerTitle: "Shop",
        })
        }
      />
      <MainStack.Screen
        name="DetailScreen"
        options={{ headerShown: false }}
        component={DetailScreen}
      />
      <MainStack.Screen
        name="NewSocialScreen"
        options={{ headerShown: false }}
        component={NewSocialScreen}
      />
      <MainStack.Screen
        name="ConfirmationScreen"
        options={{ headerShown: false }}
        component={ConfirmationScreen}
      />
    </MainStack.Navigator>
  );
}
