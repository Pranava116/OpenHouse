import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert, Text } from "react-native";
import axios from "axios";
import Checkbox from 'expo-checkbox';

function LoginCred({ navigation }) {
  const [USN, setUSN] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [password, setPassword] = useState("")

  const admin_password = "pagarao"
  async function PostUSN() {

    if (!isChecked){
    if (!USN.trim()) {
      Alert.alert("Validation Error", "USN cannot be empty");
      return;
    }
    try {
      const response = await axios.post("http://192.168.0.104:3000/login/student", {
        USN
      });
      console.log(response.data)
      Alert.alert("Success", "Login successful");
      navigation.navigate('Home'); // Uncomment if navigation is needed
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Login failed");
    }
  }
else{
  if (password == admin_password){
    
    navigation.navigate("AdminHome")
  }
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
      <View style={{display: "flex"}}>
      <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text >Admin</Text>
        </View>
        {isChecked ? <View>
      <TextInput placeholder="password"  style={styles.input}
      onChangeText={setPassword}
      value={password}
      />
    </View>: null}
      <Button title="Submit" onPress={PostUSN} />
    </View>
  );
}


// function AdminPass({ navigation }){
//   const [password, setPassword] = useState("")
//   const admin_password = "pagarao"
//   if (password == admin_password){
//     navigation.navigate("AdminHome")
//   }
//   return(
//     <View>
//       <TextInput placeholder="password"  style={styles.input}
//       onChangeText={setPassword}
//       value={password}
//       />
//     </View>
//   )
// }
export { LoginCred };

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  checkbox: {
    margin: 8,
  },
});
