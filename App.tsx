import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function App(){
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <Text accessibilityLabel="welcome-text">Welcome to the App!</Text>

      <Button
        title="Press Me"
        onPress={() => setMessage('Button was pressed!')}
        accessibilityLabel="PressButton" // For Appium to identify it
      />

      {message !== '' && (
        <Text testID="response-text" accessibilityLabel="ResponseMessage">
          {message}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
