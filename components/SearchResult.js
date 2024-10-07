import { View, StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

const SearchResult = ({ result }) => {
  const { title, address, tags } = result;
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderLeftWidth: 5,
    borderLeftColor: "#ffde03",
    marginBottom: 5,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  cardSubtitle: {
    fontWeight: "bold",
    color: "grey",
  },
});

export default SearchResult;
