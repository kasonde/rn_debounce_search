import { StyleSheet, View, Text, FlatList } from "react-native";
import { Appbar, Card, TextInput } from "react-native-paper";
import { useState } from "react";
import searchResults from "../utils/mock/searchResults";
import SearchResult from "../components/SearchResult";

const Home = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState(searchResults);

  const renderResults = ({ item }) => {
    return <SearchResult result={item} />;
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.pageHeader}>
        <View style={styles.pageHeading}>
          <Text style={styles.headerText}>What are you looking for?</Text>
        </View>
        <View>
          <TextInput
            style={styles.cardStyle}
            label="Best restaurants in my city..."
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
      </View>
      <FlatList
        style={styles.pageBody}
        data={results}
        renderItem={renderResults}
        keyExtractor={(result) => result.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  pageHeader: {
    padding: 20,
  },
  pageHeading: {
    justifyContent: "flex-end",
    alignItems: "stretch",
    height: 200,
    marginBottom: 25,
  },
  pageBody: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 42,
    fontWeight: "900",
    color: "#fff",
  },
  cardStyle: {
    backgroundColor: "#fff",
  },
});

export default Home;
