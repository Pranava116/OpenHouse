import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert } from "react-native";
import axios from "axios";

function LoginCred({ navigation }) {
  const [USN, setUSN] = useState("");

  async function PostUSN() {
    if (!USN.trim()) {
      Alert.alert("Validation Error", "USN cannot be empty");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/login/student", {
        USN,
      });
      console.log(response.data);
      Alert.alert("Success", "Login successful");
      // navigation.navigate('Home'); // Uncomment if navigation is needed
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Login failed");
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={styles.input}
        placeholder="Enter your USN"
        keyboardType="default"
        onChangeText={setUSN}
        value={USN}
      />
      <Button title="Submit" onPress={PostUSN} />
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
