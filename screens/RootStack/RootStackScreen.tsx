import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackScreen } from "./MainStack/MainStackScreen";
import NewItemScreen from "./NewItemScreen/NewItemScreen.main";
import NewHousingScreen from "./NewHousingScreen/NewHousingScreen.main";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackParamList = {
  Main: undefined;
  NewItemScreen: undefined;
  NewHousingScreen: undefined;
  ConfirmationScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export function RootStackScreen() {
  const options = { headerShown: false };
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ presentation: 'modal' }} initialRouteName="Main">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={options}
        />
        <RootStack.Screen
          name="NewItemScreen"
          options={options}
          component={NewItemScreen}
        />
        <RootStack.Screen
          name="NewHousingScreen"
          options={options}
          component={NewHousingScreen}
        />
        {/* Create a confirmation screen that appears after you create a social (refer to video demo) */}
        {/* Be as creative as you'd like, but ensure that it has two buttons, one to go to home screen, and one to view socials */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
