import React from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.littleTitle}>Login</Text>
                <TextInput placeholder="Email" style={styles.input}></TextInput>
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.input}
                ></TextInput>
                <TouchableOpacity
                    accessibilityLabel="Log In"
                    onPress={() => this.props.navigation.navigate("My list")}
                    style={styles.btn}
                >
                    <LinearGradient
                        style={styles.btnCustom}
                        colors={["#D36EFF", "#A821E2"]}
                    >
                        <Text style={styles.btn}>Log in</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },

    littleTitle: {
        fontSize: 25,
        fontWeight: "bold",
    },

    input: {
        width: "60%",
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        color: "#000",
        height: 50,
    },

    btnCustom: {
        padding: 10,
        marginTop: 50,
    },

    btn: {
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "600",
    },
});

export default Login;
