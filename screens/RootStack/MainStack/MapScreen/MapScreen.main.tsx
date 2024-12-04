import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../MainStackScreen.js";
import { Appbar } from 'react-native-paper'

interface Props {
  navigation: StackNavigationProp<MainStackParamList, "MapScreen">;
}

export default function MapScreen({ navigation }: Props) {
  const NavigationBar = () => {
    // TODO: Return an AppBar, with a title & a Plus Action Item that goes to the NewItemScreen.
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('HomeScreen')} />
        <Appbar.Content title="Explore Housing" />
      </Appbar.Header>
    );
  };

  return (
     
    <View style={styles.container}>
      <NavigationBar />
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: 37.866495,
          longitude: -122.265050,
          latitudeDelta: 0.03, // Smaller delta for closer zoom
          longitudeDelta: 0.03, // Adjust for aspect ratio
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
