import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden', // Ensure the image and card content are aligned
  },
  cardImage: {
    height: 200, // Set the height of the image
    width: '100%', // Full width
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardDate: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: '#333',
  },
  noShadow: {
    shadowColor: undefined,
    shadowOffset: undefined,
    shadowOpacity: undefined,
    shadowRadius: undefined,
    elevation: 0,  // For Android if needed
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  }
});
