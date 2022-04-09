import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    accessibilityLabel="Log Out"
                    onPress={() => this.props.navigation.navigate("home")}
                    style={styles.btn}
                >
                    <LinearGradient
                        style={styles.btnCustom}
                        colors={["#D36EFF", "#A821E2"]}
                    >
                        <Text style={styles.btnText}>Log Out</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },

    littleTitle: {
        fontSize: 25,
        fontWeight: "700",
        margin: 30,
    },
    btnCustom: {
        padding: 10,
    },
    btn: {
        textAlign: "center",
    },

    btnText: {
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "600",
    },
});

export default Logout;
