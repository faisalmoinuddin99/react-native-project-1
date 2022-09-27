import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Header from "./components/Header";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Go to gym", key: 1 },
    { text: "buy coffee", key: 2 },
    { text: "create an app", key: 3 },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "wheat",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
