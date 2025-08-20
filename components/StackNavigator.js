import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './LandingScreen';
import TracksScreen from './TracksScreen';
import FavoritesScreen from './FavoritesScreen';
import PlaylistsScreen from './PlaylistsScreen';
import PlaylistsHelper from './PlaylistsHelper';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  const options = (title) => {
    return {
      headerTitle: title,
      headerTitleAlign: "center",
      headerTitleStyle: {fontSize: 30, fontWeight: "700", fontFamily: 'Roboto', color: "black"},
      headerStyle: {backgroundColor: "#f1f2ff"}
    };
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="landing"
          component={LandingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="tracks"
          component={TracksScreen}
          options={() => options('Tracks')}
        />
        <Stack.Screen
          name="favorites"
          component={FavoritesScreen}
          options={() => options('Favorites')}
        />
        <Stack.Screen
          name="playlists"
          component={PlaylistsScreen}
          options={() => options('Playlists')}
        />
        <Stack.Screen
          name="playlistshelper"
          component={PlaylistsHelper}
          options={() => options('My Playlist')}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;