import React from "react";
import { Button, Text, View } from "react-native";

function LoginPage({ navigation }) {
  return (
    <View>
      <View>
        <Button
          title="Student"
          onPress={() => {
            navigation.navigate("LoginCred");
          }}
        />
      </View>
      <View>
        <Button title="Faculty" />
      </View>
    </View>
  );
}

export { LoginPage };
