import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { fetchTracks} from './lib/fetchTracks.js';
import { useQuery } from '@tanstack/react-query';
import { SavedTrack } from 'spotify-types';

const App = () => {
  const trackUrls = [
    'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
    'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
    'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
    'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
    'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
  ];
  const [trackIndex, setTrackIndex] = useState(0)
  const goToPreviousTrack = () => {
    setTrackIndex(trackIndex - 1);
  };
  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };
  const { data:tracks } : {data:undefined|SavedTrack[]}= useQuery({
		queryKey: ['tracks'],
		queryFn: fetchTracks
  });
  console.log(tracks)
  const AlbumCover = ({track}) =>  {
    const src = track.track?.album?.images?.[0]?.url; // A changer ;)
    return (
        <img src={src} style={{ width: 400, height: 400 }} />
    );
  }
  const currentTrack=tracks?.[trackIndex];
  const track0=tracks?.[0];
  const track1=tracks?.[1];
  const track2=tracks?.[2];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">C'EST LE BLIND TEST</h1>
      </header>
      <div className="App-images">
        <p>ET ALORS CENTRALISATION CA EN EST OU ? PETITE REU SOON ?</p>
        <AlbumCover track={currentTrack}/>
        <audio src={currentTrack?.track?.preview_url} autoPlay controls />
        <button onClick={goToPreviousTrack}>Previous track</button>
        <button onClick={goToNextTrack}>Next track</button>
      </div>
      <div className="App-buttons">
        <button>{track0?.track?.name}</button>
        <button>{track1?.track?.name}</button>
        <button>{track2?.track?.name}</button>
      </div>
    </div>
  );
};

export default App;
