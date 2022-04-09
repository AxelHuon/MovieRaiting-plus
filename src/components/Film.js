import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { getImageFilm } from "../API/api";
import { LinearGradient } from "expo-linear-gradient";
class Film extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { film, displayDetailFilm } = this.props;
        return (
            <LinearGradient style={styles.box} colors={["#D36EFF", "#A821E2"]}>
                <TouchableOpacity
                    onPress={() => displayDetailFilm(film.id)}
                    style={styles.main_container}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: getImageFilm(film.poster_path) }}
                    />
                    <View>
                        <Text style={styles.titleFilm}>{film.title}</Text>
                        <Text style={styles.rate}>{film.vote_average} ⭐️</Text>
                        <Text numberOfLines={3} style={styles.overview}>
                            {film.overview}
                        </Text>
                    </View>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        width: "100%",
        flexDirection: "column",
        padding: 20,
        marginTop: 10,
    },
    box: {
        marginTop: 20,
    },
    titleFilm: {
        fontSize: 30,
        color: "white",
        fontWeight: "700",
        marginBottom: 10,
    },
    rate: { fontSize: 25, color: "white", fontWeight: "700", marginBottom: 10 },
    overview: {
        fontSize: 15,
        color: "white",
        fontWeight: "500",
    },
});

export default Film;
