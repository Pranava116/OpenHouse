import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";

function LoginCred({ navigation }) {
  const [USN, setUSN] = useState("");
  function changeUSN(e) {
    setUSN(e.target);
  }
  async function PostUSN() {
    console.log(USN);
    await axios.post("/login/student", { USN: USN }).then(function (response) {
      console.log(response);
    });
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter your USN"
        keyboardType="default"
        onChange={changeUSN}
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
