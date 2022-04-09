import React from "react";
import { StyleSheet, View, Button, Text, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import OwnFilm from "./OwnFilm";

class ListFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [
                {
                    title: "Spider-man : No way Home",
                    grade: "6",
                    overview:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
                    comment: "Carry par du fan service",
                    releaseDate: "12/12/21",
                },
            ],
        };
    }

    addFilm = (film) => {
        this.setState((prevState) => ({
            films: [...prevState.films, film],
        }));
    };

    renderItemFilm = ({ item }) => {
        return <OwnFilm film={item}></OwnFilm>;
    };

    displayDetailFilmCustom = (
        title,
        grade,
        overview,
        comment,
        releaseDate
    ) => {
        this.props.navigation.navigate("Film details", {
            title: title,
            grade: grade,
            overview: overview,
            comment: comment,
            releaseDate: releaseDate,
        });
    };

    keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.litteTitle}>My list of films</Text>
                    <LinearGradient
                        style={styles.btnCustom}
                        colors={["#D36EFF", "#A821E2"]}
                    >
                        <Button
                            color={"white"}
                            title="Add a film"
                            onPress={() =>
                                this.props.navigation.navigate("AddFilm", {
                                    addFilm: (film) => this.addFilm(film),
                                })
                            }
                        />
                    </LinearGradient>
                </View>

                <FlatList
                    data={this.state.films}
                    keyExtractor={this.keyExtractor}
                    renderItem={({ item }) => (
                        <OwnFilm
                            film={item}
                            displayDetailFilmCustom={
                                this.displayDetailFilmCustom
                            }
                        />
                    )}
                    style={styles.listItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
        marginTop: 20,
        alignItems: "center",
    },

    litteTitle: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "700",
        padding: 25,
    },
    listItem: {
        width: "100%",
    },
});

export default ListFilm;
