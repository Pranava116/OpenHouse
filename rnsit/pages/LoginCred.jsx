import React, { useState } from "react";
import { Button, StyleSheet,TouchableOpacity, TextInput, View, Alert, Text } from "react-native";
import axios from "axios";

function LoginCred({ navigation }) {
  const [USN, setUSN] = useState("");

  async function PostUSN() {
    if (!USN.trim()) {
      Alert.alert("Validation Error", "USN cannot be empty");
      return;
    }
    try {
      const response = await axios.post(
        "http://192.168.0.104:3000/login/student",
        {
          USN,
        },
      );
      console.log(response.data);
      Alert.alert("Success", "Login successful");
      navigation.navigate("Home"); // Uncomment if navigation is needed
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
      <TouchableOpacity
        style={styles.button} 
        title="Submit"
        onPress={PostUSN} 
      >G
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
      
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
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 120,
    margin: 15,
    fontSize: 16,
  },
   button: {
    backgroundColor: '#3498db',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    margin: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  }
});
