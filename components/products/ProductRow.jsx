import { FlatList, View } from "react-native";
import React from "react";
import { SIZES } from "../../constants";
import PrdocutCardView from "./PrdocutCardView";
import styles from "./productRow.style";

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <PrdocutCardView/>}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
