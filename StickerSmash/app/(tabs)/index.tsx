import { Image, StyleSheet, Platform, Text, View, FlatList} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState, useEffect } from "react";
import { ItemModel } from "../../models/item.js";
import { db } from '../../firebase';

import { getFirestore, collection, onSnapshot, query } from "firebase/firestore";

import { styles } from "./index.styles";

export default function HomeScreen() {
  const [items, setItems] = useState<ItemModel[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'items'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const itemList: ItemModel[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data()
  
        const itemDoc: ItemModel = {
          itemDescription: data.itemDescription,
          itemImage: data.itemImage,
          itemName: data.itemName,
          itemPrice: data.itemPrice,
        };
  
        itemList.push(itemDoc);
        console.log(`${doc.id} => `, data);
      });

      setItems(itemList);
    });

    return () => unsubscribe(); // Detach listener when component unmounts
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Yo</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1000000: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

