import { useState } from "react";
import { TextInput } from "react-native";
import { react } from "react-native";
import axios from "axios";

function AddPost() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  async function AddNewPost() {
    const reponse = await axios.post("http://192.168.0.104:3000/addPost", {
      title: title,
      desc: desc,
      date: date,
    });
  }
  return (
    <View>
      <View>
        <TextInput placeholder="title" onChangeText={setTitle} value={title} />
        <TextInput
          placeholder="description"
          onChangeText={setDesc}
          value={desc}
        />
        <TextInput placeholder="date" onChangeText={setDate} value={date} />
        <Button title="Add" />
      </View>
    </View>
  );
}

export { AddPost };
