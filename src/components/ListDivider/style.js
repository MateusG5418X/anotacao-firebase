import { StyleSheet } from "react-native";
import { theme } from "../../Global/styles/theme";

export const styles = StyleSheet.create ({
    container: {
        width: '100%',
        height: 1,
        backgroundColor: theme.colors.principal,
        marginVertical: 21,
        alignSelf: 'flex-end'
    }
});