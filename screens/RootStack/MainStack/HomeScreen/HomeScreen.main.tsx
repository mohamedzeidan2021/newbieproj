import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { styles } from './HomeScreen.styles'; 
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../MainStackScreen.js";
import {Modal, Portal, Button} from 'react-native-paper';

interface Props {
    navigation: StackNavigationProp<MainStackParamList, "HomeScreen">;
  }

export default function HomeScreen({ navigation }: Props) {
//   const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

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
        onPress={showModal}
      >
        <Text style={styles.linkText}>Sell</Text>
      </TouchableOpacity>

      <Portal>
        <Modal 
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}
        >
          <Text style={styles.modalText}>List Housing or Item</Text>
          <Button mode="outlined" onPress={ async () => {
            hideModal(); // Hide the modal first
            await new Promise((resolve) => setTimeout(resolve, 200)); // Small delay to ensure the modal hides
            navigation.navigate('NewHousingScreen'); // Then navigate
          }}>
            Housing
          </Button>
          <Button mode="outlined" onPress={ async () => {
            hideModal(); // Hide the modal first
            await new Promise((resolve) => setTimeout(resolve, 200)); // Small delay to ensure the modal hides
            navigation.navigate('NewItemScreen'); // Then navigate
          }}>
            Item
          </Button>
        </Modal>
      </Portal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MapScreen')}
      >
        <Text style={styles.linkText}>Housing</Text>
        
      </TouchableOpacity>
    </View>
  );
}