import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="overflow-hidden w-11/12 h-20 bg-white shadow-xl shadow-orange-600  rounded-r-full mt-6 "
      onPress={() =>
        navigation.navigate("category", { Category: item.strCategory })
      }
    >
      <View className="w-full h-full flex-row justify-around items-center">
        <Text className="text-3xl font-medium ">{item.strCategory}</Text>
        <Image
          source={{ uri: `${item.strCategoryThumb}` }}
          className="w-20 h-20 rounded-full object-cover"
        />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
