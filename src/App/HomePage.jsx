import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Catagories from "../components/Catagories";

export default function HomePage() {
  return (
    <LinearGradient colors={["#ea580c", "#d97706"]}>
      <SafeAreaView className="w-full h-full">
        <Catagories />
      </SafeAreaView>
    </LinearGradient>
  );
}
