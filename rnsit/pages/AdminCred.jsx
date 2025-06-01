import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
function AdminCred({ navigation }) {
    const [ USN, setUSN] = useState("")
    const[password, setPassword] = useState("")
    const admin_pass = "pagarao"
    async function AdminPost(){
        if (!USN.trim()) {
      Alert.alert("Validation Error", "USN cannot be empty");
      return;
    }
    if(password == admin_pass) {
    let Admin = true
    try {
      const response = await axios.post("http://192.168.0.104:3000/login/student", {
        USN, Admin
      });
      console.log(response.data)
      Alert.alert("Success", "Login successful");
      navigation.navigate('AdminHome'); // Uncomment if navigation is needed
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Login failed");
    }
}
else{
    Alert.alert("Password", "wrong password")
    setPassword("")
    setUSN("")
}
    }
  return (
    <View style={styles.container}>
      <TextInput
              style={styles.input}
              placeholder="Enter your USN"
              keyboardType="default"
             onChangeText={setUSN}
             value={USN}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              keyboardType="default"
              onChangeText={setPassword}
              value={password}
            />
            <View style={styles.button}>
              <Button title="Submit" onPress={AdminPost} />
            </View>
    </View>
  )
}
export {AdminCred}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 10,
  },
  checkbox: {
    margin: 8,
  },
});