import { StyleSheet } from "react-native";
import { AppStyles } from "../../../../AppStyles";

export const styles = StyleSheet.create({
  ...AppStyles,
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Clean white background
    paddingHorizontal: 10, // Slight horizontal padding for better alignment
  },
  card: {
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 12, // Softer rounded corners
    backgroundColor: '#ffffff', // White card for contrast
    shadowColor: '#000', // Subtle shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
    overflow: 'hidden', // Ensure content is clipped properly
  },
  cardImage: {
    height: 180, // Uniform image height
    width: '100%', // Full width of the card
    borderTopLeftRadius: 12, // Match card radius
    borderTopRightRadius: 12,
  },
  cardTitle: {
    fontFamily: 'Georgia',
    fontSize: 20,
    fontWeight: '600',
    color: '#333333', // Darker text for readability
    marginVertical: 8,
    paddingHorizontal: 12, // Padding for better alignment
  },
  cardDate: {
    fontFamily: 'Georgia',
    fontSize: 14,
    fontWeight: '400',
    color: '#777777', // Subtle gray for less emphasis
    marginBottom: 6,
    paddingHorizontal: 12, // Padding for alignment
  },
  cardDescription: {
    
    fontSize: 16,
    fontWeight: '400',
    color: '#444444', // Slightly darker than the date
    paddingHorizontal: 12,
    marginBottom: 12, // Space after the description
  },
  noShadow: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0, // No shadow
  },
});
