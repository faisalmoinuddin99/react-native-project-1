import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const App = () => {
  const [category, setCategory] = useState([
    {
      categoryName: "sports",
      id: 1,
    },
    {
      categoryName: "festival",
      id: 2,
    },
    {
      categoryName: "party",
      id: 3,
    },
    {
      categoryName: "official",
      id: 4,
    },
    {
      categoryName: "casual",
      id: 5,
    },
    {
      categoryName: "beaches",
      id: 6,
    },
    {
      categoryName: "outing",
      id: 7,
    },
    {
      categoryName: "date",
      id: 8,
    },
  ]);
  const pressHandler = (id) => {
    console.log(id);
    setCategory((prevCategory) => {
      return prevCategory.filter((category) => category.id != id);
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={category}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.categoryName}</Text>
          </TouchableOpacity>
        )}
      />
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
    marginHorizontal: 10,
    marginTop: 24,
  },
});

export default App;
