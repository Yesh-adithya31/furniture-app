import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./productDetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title} ellipsizeMode="tail">
            This Is The Product
          </Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>LKR 67,000</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}> (4.9) </Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text>Description</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amte, construectwe, Lorem ipsum dolor sit
            amte, construectwe, Lorem ipsum dolor sit amte, construectwe, Lorem
            ipsum dolor sit amte, construectwe, Lorem ipsum dolor sit amte,
            construectwe, Lorem ipsum dolor sit amte, construectwe, Lorem ipsum
            dolor sit amte, construectwe, Lorem ipsum dolor sit amte,
            construectwe, Lorem ipsum dolor sit amte, construectwe, Lorem ipsum
            dolor sit amte, construectwe, Lorem ipsum dolor sit amte,
            construectwe, Lorem ipsum dolor sit amte, construectwe, Lorem ipsum
            dolor sit amte, construectwe, Lorem ipsum dolor sit amte,
            construectwe, Lorem ipsum dolor sit amte, construectwe, Lorem ipsum
            dolor sit amte, construectwe, Lorem ipsum dolor sit amte,
            construectwe, Lorem ipsum dolor sit amte, construectwe,
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: SIZES.small }}>
        <View style={styles.location}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="location-outline" size={20} />
            <Text>  Colombo</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
            <Text>  Free Delivery   </Text>
          </View>
        </View>

        <View style={styles.cartRow}>
            <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
                <Text style={styles.cartTitle}>BUY NOW</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
                <Fontisto name="shopping-bag" size={20} color={COLORS.lightWhite}/>
            </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

export default ProductDetails;
