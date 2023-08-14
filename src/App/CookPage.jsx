import {
  View,
  Text,
  ScrollView,
  Image,
  Linking,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { getMealAsync, getRecipieAsync } from "../redux/cookSlice/cookSlice";
import { Entypo } from "@expo/vector-icons";
const CookPage = ({ route }) => {
  const { cookId } = route.params;
  const dispatch = useDispatch();
  const Cook = useSelector((state) => state.cook.meal);

  useEffect(() => {
    dispatch(getRecipieAsync(cookId));
  }, [dispatch]);

  if (Cook == null || Cook == "") {
    <SafeAreaView className="w-full h-full items-center justify-center bg-black">
      <Text className="text-6cl font-bold text-black">Loading ...</Text>
    </SafeAreaView>;
  } else {
    const cookData = Cook.meals[0];
    return (
      <LinearGradient colors={["#ea580c", "#d97706"]}>
        <SafeAreaView className="w-full h-full">
          <Image
            source={{ uri: `${cookData.strMealThumb}` }}
            className="w-full h-60 object-contain rounded-lg mt-2"
          />
          <ScrollView>
            <Text className="font-medium text-2xl text-center text-orange-200 mt-6">
              {cookData.strMeal}
            </Text>
            <View className="w-full  flex-row items-center justify-center mx-1 mt-4 space-x-4 ">
              <Text className="text-lg font-sm text-white">
                Country : {cookData.strArea}{" "}
              </Text>
              <Text className="text-lg font-sm text-white">
                Category : {cookData.strCategory}
              </Text>
            </View>
            <View className="w-full mt-2 space-y-2 items-center justify-center">
              <Text className="font-semibold text-xl text-orange-200 my-4">
                Ingredients :
              </Text>
              <Text className="font-medium text-lg text-orange-300">
                {cookData.strMeasure1} of {cookData.strIngredient1}
              </Text>
              <Text className="font-medium text-lg text-orange-300">
                {cookData.strMeasure2} of {cookData.strIngredient2}
              </Text>
              <Text className="font-medium text-lg text-orange-300">
                {cookData.strMeasure3} of {cookData.strIngredient3}
              </Text>
              <Text className="font-medium text-lg text-orange-300">
                {cookData.strMeasure4} of {cookData.strIngredient4}
              </Text>
              <Text className="font-medium text-lg text-orange-300">
                {cookData.strMeasure5} of {cookData.strIngredient5}
              </Text>
              <Text className="font-medium text-lg text-orange-300">
                {cookData.strMeasure6} of {cookData.strIngredient6}
              </Text>
              <Text className="font-medium text-lg text-orange-300">
                {cookData.strMeasure7} of {cookData.strIngredient7}
              </Text>
              <Text className="font-medium text-lg text-orange-300">
                {cookData.strMeasure8} of {cookData.strIngredient8}
              </Text>
              <Text className="font-medium text-lg text-orange-300">
                {cookData.strMeasure9} of {cookData.strIngredient9}
              </Text>
            </View>

            <Text className="font-semibold text-xl text-orange-200 mt-4 ml-4">
              Instructions :
            </Text>
            <Text className="font-medium text-sm text-white mt-1 mx-1 mb-4">
              {cookData.strInstructions}
            </Text>
            <TouchableWithoutFeedback
              onPress={() => {
                Linking.openURL(`${cookData.strYoutube}`);
              }}
            >
              <View className="w-full items-center justify-center flex-row space-x-4 my-4">
                <Text className="font-medium text-lg text-white">
                  Watch on Youtube
                </Text>
                <Entypo name="youtube" size={40} color="red" />
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    );
  }
};

export default CookPage;
