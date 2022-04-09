import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

class OwnFilmInfos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const film = this.props.route.params;
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{film.title}</Text>
                <Text style={styles.grade}>{film.grade} ⭐️</Text>
                <Text style={styles.overview}>{film.overview}</Text>
                <Text style={styles.comment}>Comment : {film.comment}</Text>
                <Text style={styles.release}>
                    Released the {film.releaseDate}
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: "700",
        textAlign: "center",
        color: "violet",
        marginBottom: 20,
    },
    grade: {
        fontSize: 25,
        fontWeight: "700",
        marginBottom: 20,
        textAlign: "center",
    },
    overview: {
        fontSize: 20,
        marginBottom: 20,
    },
    comment: {
        fontSize: 15,
        marginBottom: 20,
    },
});

export default OwnFilmInfos;
