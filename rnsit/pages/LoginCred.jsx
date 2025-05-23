import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function LoginCred({ navigation }) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter your USN"
        keyboardType="numeric"
      />
      <Button title="Submit" />
    </View>
  );
}

export { LoginCred };

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
