import React from "react";
import { Button,StyleSheet, Text, View } from "react-native";

function LoginPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Student"
          onPress={() => {
            navigation.navigate("LoginCred");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Faculty"
          onPress={() => {
            navigation.navigate("LoginCred");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Admin"
          onPress={() => {
            navigation.navigate("AdminCred");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
button: {
    width: "80%",
    margin : 10,
  },
});

export { LoginPage };
