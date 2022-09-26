import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>Hello, Faisal!! </Text>
      </View>
      <View style={styles.body}>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          iusto.
        </Text>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          iusto.
        </Text>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          iusto.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "wheat",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 30,
    marginTop: 10,
  },
});
