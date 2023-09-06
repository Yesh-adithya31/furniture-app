import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./search.style";
import { COLORS, SIZES } from "../constants";
import axios from "axios";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchresults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://furniture-app-api.onrender.com/api/products/search/${searchKey}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Failed to Fetch Products", error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            onPressIn={() => {}}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()}>
            <Feather name="search" size={SIZES.xLarge} color={COLORS.WHITE} />
          </TouchableOpacity>
        </View>
      </View>
      {searchresults.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/q-mark.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchresults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (<SearchTile item={item}/>)}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
