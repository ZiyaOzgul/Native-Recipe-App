import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCooksAsync } from "../redux/cookSlice/cookSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import RecipieCard from "../components/RecipieCard";
import { LinearGradient } from "expo-linear-gradient";

const CategoryPage = ({ route }) => {
  const { Category } = route.params;
  const dispatch = useDispatch();
  const categoryItems = useSelector((state) => state.cook.category);

  useEffect(() => {
    dispatch(getCooksAsync(Category));
  }, []);

  if (categoryItems == "" || categoryItems == null) {
    <SafeAreaView className="w-full h-full items-center justify-center">
      <Text className="text-3xl font-semibold text-orange-400 ">
        Loading ...
      </Text>
    </SafeAreaView>;
  } else {
    return (
      <LinearGradient colors={["#ea580c", "#d97706"]}>
        <SafeAreaView className="w-full h-full  ">
          <Text className="my-4 text-orange-200 font-semibold text-3xl text-center">
            {Category}
          </Text>

          <FlatList
            data={categoryItems.meals}
            renderItem={(item) => <RecipieCard item={item.item} />}
            key={(key) => key.idMeal}
          />
        </SafeAreaView>
      </LinearGradient>
    );
  }
};

export default CategoryPage;
