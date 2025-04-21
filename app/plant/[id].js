import React from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { plantData } from "../../data/plantData";

const PlantDetail = () => {
  const { id } = useLocalSearchParams();

  const plant = plantData.find((p) => p.id === Number(id));

  if (!plant) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFound}>Plant not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={plant.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{plant.name}</Text>
      <Text style={styles.scientific}>{plant.scientificName}</Text>
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{plant.description}</Text>
      <Text style={styles.sectionTitle}>Sunlight</Text>
      <Text style={styles.details}>{plant.sunlight}</Text>
      <Text style={styles.sectionTitle}>Watering</Text>
      <Text style={styles.details}>{plant.watering}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e7d32",
    textAlign: "center",
  },
  scientific: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#388e3c",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  description: {
    fontSize: 16,
    color: "#444",
    marginTop: 5,
    textAlign: "flex-start",
  },
  details: {
    fontSize: 16,
    color: "#444",
    marginTop: 5,
    alignSelf: "flex-start",
  },
  notFound: {
    fontSize: 18,
    color: "red",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default PlantDetail;
