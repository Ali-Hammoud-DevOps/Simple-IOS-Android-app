import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.greetingText}>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7', // Light background
  },
  innerContainer: {
    padding: 20,
    backgroundColor: '#fff', // White background for text area
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Shadow for a slight elevation
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // For Android shadow effect
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Dark text color
    textAlign: 'center',
  },
});

export default App;
