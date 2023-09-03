import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import {Ionicons} from "@expo/vector-icons"
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const PrdocutCardView = () => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => {navigation.navigate("ProductDetails")}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{uri: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"}}
            style={styles.image}
            />
        </View>

        <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>Product Name Desiplay Here</Text>
            <Text style={styles.supplier} numberOfLines={1}>Product</Text>
            <Text style={styles.price} numberOfLines={1}>LKR. 67,000</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={SIZES.xxLarge} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default PrdocutCardView;