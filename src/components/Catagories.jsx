import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAsync } from "../redux/cookSlice/cookSlice";
import CategoryCard from "./CategoryCard";

const Catagories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.cook.recipie);

  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, []);
  if (categories == "" || categories == [""]) {
    <View className="w-full h-full items-center justify-center">
      <Text className="text-xl font-medium text-white">Loading ...</Text>;
    </View>;
  } else {
    return (
      <View className="w-full h-full items-center  ">
        <Text className="text-orange-300 font-semibold text-3xl my-6 text-center">
          Categories
        </Text>
        <FlatList
          data={categories.categories}
          renderItem={(item) => <CategoryCard item={item.item} />}
          keyExtractor={(item) => item.idCategory}
        />
      </View>
    );
  }
};

export default Catagories;
