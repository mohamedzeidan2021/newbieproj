import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',      // Centers horizontally
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Georgia',
    fontSize: 50,
    marginBottom: 20,          // Space between title and first button
  },
  button: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#003262', // Add a background color to the buttons
    borderRadius: 5,
  },
  linkText: {
    fontFamily: 'Georgia',
    color: '#fff',             // White text for the buttons
    fontSize: 18,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalText: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});