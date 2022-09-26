import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("Faisal");
  const [counter, setcounter] = useState(0);
  const [person, setPerson] = useState({ name: "mario", age: 40 });

  const clickHandler = () => {
    if (name === "Faisal") {
      setName("Suleman");
      setcounter(counter + 1);
    } else if (name === "Suleman") {
      setName("Faisal");
      setcounter(counter + 1);
    }

    if (counter === 40) {
      setcounter(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>Counter: {counter}</Text>
      <Text>
        His name is {person.name} and he is {person.age} year youngs
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
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
});
