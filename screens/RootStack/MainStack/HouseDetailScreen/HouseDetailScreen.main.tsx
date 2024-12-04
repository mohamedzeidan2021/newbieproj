import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ScrollView, Image, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { MainStackParamList } from "../MainStackScreen";
import { styles } from "./HouseDetailScreen.styles";

interface Props {
  navigation: StackNavigationProp<MainStackParamList, "HouseDetailScreen">;
  route: RouteProp<MainStackParamList, "HouseDetailScreen">;
}

export default function HouseDetailScreen({ route, navigation }: Props) {
  // Extract the housing model from route params
  const { house } = route.params;

  const Bar = () => {
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate("MapScreen")} />
        <Appbar.Content title="Housing Details" />
      </Appbar.Header>
    );
  };

  return (
    <>
      <Bar />
      <ScrollView style={styles.container}>
        <View style={styles.view}>
          {/* Display house image */}
          <Image style={styles.image} source={{ uri: house.houseImage }} />
          
          {/* Display house name */}
          <Text style={{ ...styles.h1, marginVertical: 10 }}>
            {house.houseName}
          </Text>
          
          {/* Display house latitude and longitude */}
          <Text style={{ ...styles.subtitle, marginTop: 5, marginBottom: 20 }}>
            Latitude: {house.houseLatitude.toFixed(6)}, Longitude: {house.houseLongitude.toFixed(6)}
          </Text>
          
          {/* Display house description */}
          <Text style={styles.body}>{house.houseDescription}</Text>
        </View>
      </ScrollView>
    </>
  );
}
