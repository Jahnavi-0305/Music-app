import React from 'react';
import DisplayTracks from './DisplayTracks';

const FavoritesScreen = ({ navigation }) => {

  return (
    <DisplayTracks navigation={navigation} screenType="favorites"/>
  );
};

export default FavoritesScreen;