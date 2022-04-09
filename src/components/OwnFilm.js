import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
class OwnFilm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { film, displayDetailFilmCustom } = this.props;
        return (
            <LinearGradient style={styles.box} colors={["#D36EFF", "#A821E2"]}>
                <TouchableOpacity
                    onPress={() =>
                        displayDetailFilmCustom(
                            film.title,
                            film.grade,
                            film.overview,
                            film.comment,
                            film.releaseDate
                        )
                    }
                    style={styles.main_container}
                >
                    <View>
                        <Text style={styles.titleFilm}>{film.title}</Text>
                        <Text style={styles.rate}>{film.grade} ⭐️</Text>
                        <Text style={styles.desc}>{film.overview}</Text>
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
    desc: {
        fontSize: 15,
        color: "white",
        fontWeight: "500",
    },
});

export default OwnFilm;
