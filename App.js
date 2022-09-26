import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState, useReducer } from "react";

export default function App() {
  const [name, setName] = useState("Faisal");
  const [age, setAge] = useState(0);

  const clickHandler = () => {
    let uppercaseName = name.toUpperCase();
    setName(uppercaseName);
  };

  const inputHandler = (event) => {
    setAge(event);
  };

  return (
    <View style={styles.container}>
      <Text>Enter your name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. Jhon doe"
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="e.g. 24 years"
        onChangeText={inputHandler}
      />
      <Text>
        name:{name} Length: {name.length} words: {name.split(" ").length - 1}
      </Text>
      <Text>age:{age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Click to Uppercase" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "wheat",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
