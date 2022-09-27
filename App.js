import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

const App = () => {
  const [category, setCategory] = useState([
    {
      categoryName: "sports",
      key: 1,
    },
    {
      categoryName: "festival",
      key: 2,
    },
    {
      categoryName: "party",
      key: 3,
    },
    {
      categoryName: "official",
      key: 4,
    },
    {
      categoryName: "casual",
      key: 5,
    },
    {
      categoryName: "beaches",
      key: 6,
    },
    {
      categoryName: "outing",
      key: 7,
    },
    {
      categoryName: "date",
      key: 8,
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {category.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.categoryName}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "wheat",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});

export default App;
