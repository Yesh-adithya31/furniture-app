import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles= StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        marginHorizontal: SIZES.small
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerTitle: {
        fontFamily: "semibold",
        fontSize: SIZES.xLarge-2,
    }
})

export default styles;