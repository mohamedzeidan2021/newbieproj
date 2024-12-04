import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen/HomeScreen.main";
import FeedScreen from "./FeedScreen/FeedScreen.main";
import DetailScreen from "./DetailScreen/DetailScreen.main";
import NewItemScreen from "../NewItemScreen/NewItemScreen.main";
import NewHousingScreen from "../NewHousingScreen/NewHousingScreen.main";
import ConfirmationScreen from "./ConfirmationScreen/ConfirmationScreen.main";
import MapScreen from "./MapScreen/MapScreen.main";
import { SocialModel } from "../../../models/social";

export type MainStackParamList = {
  HomeScreen: undefined;
  FeedScreen: undefined;
  DetailScreen: { social: SocialModel };
  NewItemScreen: undefined;
  ConfirmationScreen: undefined;
  MapScreen: undefined;
  NewHousingScreen: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export function MainStackScreen() {
  return (
    // TODO: Ensure that the initial route that the navigator goes to is the HomeScreen (which is a screen you have to implement!)
    // See docs on stack navigator, what can we add as a prop into MainStack.Navigator to make sure that the HomeScreen is the initial route?
    // https://reactnavigation.org/docs/2.x/stack-navigator/

    <MainStack.Navigator initialRouteName="HomeScreen">

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
            <Button
              title="Home"
              onPress={() => navigation.navigate('HomeScreen')} // When we click the home button on top left, navigate to HomeScreen
            />
          ),
          headerTitle: "All Socials",
        })
        }
      />
      <MainStack.Screen
        name="DetailScreen"
        options={{ headerShown: false }}
        component={DetailScreen}
      />
      <MainStack.Screen
        name="NewItemScreen"
        options={{ headerShown: false }}
        component={NewItemScreen}
      />
      <MainStack.Screen
        name="NewHousingScreen"
        options={{ headerShown: false }}
        component={NewHousingScreen}
      />
      <MainStack.Screen
        name="ConfirmationScreen"
        options={{ headerShown: false }}
        component={ConfirmationScreen}
      />
      <MainStack.Screen
        name="MapScreen"
        options={{ headerShown: false }}
        component={MapScreen}
      />
    </MainStack.Navigator>
  );
}
