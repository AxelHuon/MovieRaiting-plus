import React from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import Film from "./Film";
import { LinearGradient } from "expo-linear-gradient";
import { getFilmAfterSearch } from "../API/api";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.searchedText = "";
        this.page = 0;
        this.totalPages = 0;
        this.state = {
            films: [],
            isLoading: false,
        };
    }

    _displayDetailFilm = (idFilm) => {
        this.props.navigation.navigate("Film details", { idFilm: idFilm });
    };

    _searchFilms() {
        this.page = 0;
        this.totalPages = 0;
        this.setState(
            {
                films: [],
            },
            () => {
                this._loadingFilms();
            }
        );
    }

    _loadingFilms() {
        if (this.searchedText.length > 0) {
            this.setState({ isLoading: true });
            getFilmAfterSearch(
                this.searchedText,
                this.page + 1
            ).then((data) => {
                (this.page = data.page), (this.totalPages = data.total_pages);
                this.setState({
                    films: [...this.state.films, ...data.results],
                    isLoading: false,
                });
            });
        }
    }

    _Loading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }
    }

    _TextInputChanged(text) {
        this.searchedText = text;
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.title2}>Search in API</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Titre du film"
                    onChangeText={(text) => this._TextInputChanged(text)}
                    onSubmitEditing={() => this._searchFilms()}
                />

                <TouchableOpacity
                    accessibilityLabel="Rechercher"
                    onPress={() => this._searchFilms()}
                    style={styles.btn}
                >
                    <LinearGradient
                        style={styles.btnCustom}
                        colors={["#D36EFF", "#A821E2"]}
                    >
                        <Text style={styles.btnText}>Rechercher</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Film
                            film={item}
                            displayDetailFilm={this._displayDetailFilm}
                        />
                    )}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.page < this.totalPages) {
                            this._loadingFilms();
                        }
                    }}
                    style={styles.list}
                />
                {this._Loading()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    title2: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "700",
        padding: 25,
    },

    input: {
        width: "60%",
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        color: "#000",
        height: 50,
    },

    btn: {
        padding: 10,
        textAlign: "center",
    },

    btnText: {
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "600",
    },

    list: {
        width: "100%",
        margin: 10,
    },

    btnCustom: {
        padding: 10,
        marginTop: 10,
    },
});

export default Search;
