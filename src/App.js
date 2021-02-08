import React, {useEffect} from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  //runs a code on a given condition
  useEffect(() => {
    
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        });
      });

      spotify.getPlaylist('37i9dQZEVXcR3XsTfKmq5s').then(res => {
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: res
          });
      })
    }
  },[dispatch]);

  console.log(user);
  console.log(token);

  return (
    <div className="app">
    {
      token ? 
        <Player spotify = {spotify} /> :
        <Login />
    }
    </div>
  );
}

export default App;
