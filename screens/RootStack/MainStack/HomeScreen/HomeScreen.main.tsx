import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { styles } from './HomeScreen.styles'; 
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../MainStackScreen.js";

interface Props {
    navigation: StackNavigationProp<MainStackParamList, "HomeScreen">;
  }

export default function HomeScreen({ navigation }: Props) {
//   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cubby</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FeedScreen')}
      >
        <Text style={styles.linkText}>Shop</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NewSocialScreen')}
      >
        <Text style={styles.linkText}>Sell</Text>
      </TouchableOpacity>
    </View>
  );
}