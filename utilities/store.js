import React, { createContext } from 'react';
import { tracks } from './tracks';

const MusicContext = createContext();

const initialState = {
    tracks: tracks, // list containing music track objects
    /*
    list of playlists in the following format: [{name: playlistName, tracks: [playlistTrackObjects]}]
    name => name of the playlist
    tracks => list containing music track objects
    */
    playlists: []
};

const musicReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "HANDLE_FAVORITE":
            // Task 10: Handle favorites here, i.e., adding and removing music tracks from favorites
        case "CREATE_PLAYLIST":
            // Task 11: Create playlists here
            return {
                ...state,
                playlists: [...state.playlists, payload.data]
            };
        case "DELETE_PLAYLIST":
            // Task 12: Delete playlists here
            return {
                ...state,
                playlists: state.playlists.filter(
                    (playlist) => playlist.name !== payload.data
                ),
            };
        case "ADD_TRACK_TO_PLAYLIST":
            return {
                ...state,
                playlists: state.playlists.map(playlist => {
                    if (playlist.name === payload.data.playlistName) {
                        return {
                            ...playlist,
                            tracks: [...playlist.tracks, payload.data.track]
                        };
                    }
                return playlist;
                })
            };
            // Task 13: Add individual music track to a particular playlist here
        case "DELETE_TRACK_FROM_PLAYLIST":
            return {
                ...state,
                playlists: state.playlists.map(playlist => {
                    if (playlist.name === payload.data.playlistName) {
                        const updatedTracks = playlist.tracks.filter(track => track.id !== payload.data.track.id);
                        return {
                            ...playlist,
                            tracks: updatedTracks
                        };
                    }
                return playlist;
                })
            };
            // Task 14: Delete individual music track from a particular playlist here
        default:
            window.alert("Error! Something went wrong.")
    }
};

export { MusicContext, initialState, musicReducer };