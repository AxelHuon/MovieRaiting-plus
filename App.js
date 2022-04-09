import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Login from "./src/components/Login";
import Logout from "./src/components/Logout";
import Search from "./src/components/Search";
import ListFilm from "./src/components/ListFilm";
import AddFilm from "./src/components/AddFilm";
import OwnFilm from "./src/components/OwnFilm";
import FilmInfos from "./src/components/FilmInfos";
import OwnFilmInfos from "./src/components/OwnFilmInfos";

const ListFilmStack = createStackNavigator();

function ListFilmStackScreen() {
    return (
        <ListFilmStack.Navigator>
            <ListFilmStack.Screen name="My Films" component={ListFilm} />
            <ListFilmStack.Screen name="AddFilm" component={AddFilm} />
            <ListFilmStack.Screen
                name="FilmItem"
                component={FilmItemStackScreen}
            />
            <FilmItemStack.Screen
                name="Film details"
                component={OwnFilmInfos}
            />
        </ListFilmStack.Navigator>
    );
}

const FilmItemStack = createStackNavigator();

function FilmItemStackScreen() {
    return (
        <FilmItemStack.Navigator>
            <FilmItemStack.Screen
                name="FilmItemCustom"
                component={OwnFilm}
            />
            <FilmItemStack.Screen
                name="FilmDetailCustom"
                component={OwnFilmInfos}
            />
        </FilmItemStack.Navigator>
    );
}

const SearchStack = createStackNavigator();

function SearchStackScreen() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="Search" component={Search} />
            <SearchStack.Screen name="Film details" component={FilmInfos} />
        </SearchStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Login"
                    animationEnabled="true"
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let icon;

                            switch (route.name) {
                                case "My list":
                                    icon = focused
                                        ? "home"
                                        : "home-outline";
                                    break;
                                case "Login":
                                    icon = focused
                                        ? "person"
                                        : "person-outline";
                                    break;
                                case "Search a film":
                                    icon = focused
                                        ? "search"
                                        : "search-outline";
                                    break;
                                case "Log out":
                                    icon = focused
                                        ? "log-out"
                                        : "log-out-outline";
                                    break;
                                default:
                                    icon = "ban";
                                    break;
                            }
                            return (
                                <Ionicons
                                    name={icon}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: "violet",
                    }}
                >
                    <Tab.Screen name="Login" component={Login} />
                    <Tab.Screen
                        name="My list"
                        component={ListFilmStackScreen}
                    />
                    <Tab.Screen
                        name="Search a film"
                        component={SearchStackScreen}
                    />
                    <Tab.Screen name="Log out" component={Logout} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
