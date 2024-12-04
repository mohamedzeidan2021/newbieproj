import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../MainStackScreen.js";
import { Appbar } from 'react-native-paper';
import { styles } from './MapScreen.styles';
import { HousingModel } from '../../../../models/housing.js';
import { getFirestore, query, collection, onSnapshot } from 'firebase/firestore';

type LatLng = {
  latitude: number,
  longitude: number,
}

interface Props {
  navigation: StackNavigationProp<MainStackParamList, "MapScreen">;
}

const housingData: HousingModel[] = [
  {
    id: '1',
    houseName: 'Cozy Cottage',
    houseDescription: 'A beautiful cottage with a garden.',
    houseImage: '',
    houseLatitude: 37.864704,
    houseLongitude: -122.265298,
  },
  {
    id: '2',
    houseName: 'Modern Apartment',
    houseDescription: 'A sleek apartment in the heart of the city.',
    houseImage: '',
    houseLatitude: 37.866495,
    houseLongitude: -122.265050,
  },
];

export default function MapScreen({ navigation }: Props) {
  const [houses, setHouses] = useState<HousingModel[]>([]);

  const db = getFirestore();

  useEffect(() => {
    const q = query(collection(db, 'housing'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const housingList: HousingModel[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data()
  
        const housingDoc: HousingModel = {
          houseName: data.houseName,
          houseDescription: data.houseDescription,
          houseImage: '',
          houseLatitude: data.houseLatitude,
          houseLongitude: data.houseLongitude,
        };
  
        housingList.push(housingDoc);
        console.log(`${doc.id} => `, data);
      });

      setHouses(housingList);
    });

    return () => unsubscribe(); // Detach listener when component unmounts
  }, []);
  const NavigationBar = () => {
    // TODO: Return an AppBar, with a title & a Plus Action Item that goes to the NewItemScreen.
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('HomeScreen')} />
        <Appbar.Content title="Explore Housing" />
      </Appbar.Header>
    );
  };

  const handleMarkerPress = (house: HousingModel) => {
    navigation.navigate('HouseDetailScreen', { house });
  };

  const [pin, setPin] = useState<LatLng | null>(null);

  const handleMapPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setPin({ latitude, longitude });
  };

  const staticMarkerCoordinate: LatLng = {
    latitude: 37.864704,
    longitude: -122.265298,
  };

  return (
    <View style={styles.container}>
      <NavigationBar />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.865495,
          longitude: -122.265050,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
      >
        {houses.map((house, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: house.houseLatitude,
              longitude: house.houseLongitude,
            }}
            title={house.houseName}
            description={house.houseDescription}
            onPress={() => handleMarkerPress(house)}
          />
        ))}
      </MapView>
    </View>
  );
}
