import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { plantData } from "../data/plantData";

export default function HomeScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ flexDirection: "row", marginBottom: 16, alignItems: "center" }}
      onPress={() => navigation.navigate("plant/[id]", { id: item.id })}
    >
      <Image source={item.icon} style={{ width: 50, height: 50, marginRight: 12 }} />
      <View>
        <Text style={{ fontSize: 18 }}>{item.name}</Text>
        <Text>{item.summary}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#ffffff" }}>
      <FlatList
        data={plantData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
