import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

function AdminCred({navigation}) {
const admin_password = "pagarao"
const [password, setPassword] = useState("")
if (password == admin_password){
    navigation.navigate("Home")
}
  return (
    <View style={{ padding: 20 }}>
          <TextInput
            style={styles.input}
            placeholder="Enter the password"
            keyboardType="default"
            onChangeText={setPassword}
            value={password}
          />
        </View>
  )
}

export {AdminCred}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});