import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../MainStackScreen';
import { styles } from './ConfirmationScreen.styles'

interface Props {
  navigation: StackNavigationProp<MainStackParamList, 'ConfirmationScreen'>;
}

export default function ConfirmationScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your listing has been created!</Text>
      
      <Button onPress={() => navigation.navigate('HomeScreen')}>
        Go to Home
      </Button>

      <Button onPress={() => navigation.navigate('FeedScreen')} style={styles.button}>
        View Item Listing
      </Button>

      <Button onPress={() => navigation.navigate('MapScreen')} style={styles.button}>
        View House Listings
      </Button>
    </View>
  );
}