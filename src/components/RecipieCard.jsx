import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RecipieCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("cookPage", { cookId: item.idMeal })}
    >
      <View className="relative w-full  h-60 mt-6   items-center justify-center">
        <View className="w-11/12 h-full border  border-black shadow-sm shadow-orange-800 rounded-lg overflow-hidden">
          <Image
            source={{ uri: item.strMealThumb }}
            className="w-full h-full"
          />
          <Text className="absolute bottom-0 left-0 w-full h-1/6 bg-slate-700/50 text-white text-lg font-medium items-center justify-center text-center">
            {item.strMeal}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipieCard;
