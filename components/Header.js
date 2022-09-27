import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default Header;
