import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ActivityIndicator,
    ScrollView, Button,
} from "react-native";

import { getInfosFilm } from "../API/api";
import { getImageFilm } from "../API/api";
import addFilm from "./AddFilm";

class FilmInfos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            film: undefined,
            isLoading: true,
        };

    }





    componentDidMount() {
        getInfosFilm(this.props.route.params.idFilm).then((data) => {
            this.setState({
                film: data,
                isLoading: false,
            });
        });
    }

    displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }
    }

    displayFilm() {
        if (this.state.film != undefined) {
            return (
                <ScrollView style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: getImageFilm(this.state.film.poster_path),
                        }}
                    />
                    <Text style={styles.title}>{this.state.film.title}</Text>
                    <Text style={styles.grade} >
                        {this.state.film.vote_average}  ⭐
                    </Text>
                    <Text style={styles.overview}>
                        {this.state.film.overview}
                    </Text>
                    <Text style={styles.release_date}>
                        Released the {this.state.film.release_date}
                    </Text>
                </ScrollView>
            );
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                {this.displayLoading()}
                {this.displayFilm()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 20,
    },
    image: {
        display: "flex",
        width: 100,
        height: 200,
        margin: "auto",
        alignSelf: "center",
        marginBottom: 10,
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

export default FilmInfos;
