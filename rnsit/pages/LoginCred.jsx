import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";

function LoginCred({ navigation }) {
  const [USN, setUSN] = React.useState(" ");
  async function PostUSN() {
    console.log(USN);
    await axios
      .post("http://localhost:4000/login", { USN: USN })
      .then(function (response) {
        //console.log(response);
      });
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter your USN"
        keyboardType="default"
        onChangeText={setUSN}
      />
      <Button title="Submit" onPress={PostUSN} />G
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
