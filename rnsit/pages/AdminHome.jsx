import { View, Text, Button } from "react-native";
import React from "react";

function AdminHome({ navigation }) {
  function RedirectAddPost() {
    navigation.navigate("AddPost");
  }
  return (
    <View>
      <View>
        <Button title="Add" onPress={RedirectAddPost} />
      </View>
    </View>
  );
}

export { AdminHome };
