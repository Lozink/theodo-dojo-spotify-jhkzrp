const apiToken = '';
import { SavedTrack, Track } from 'spotify-types';

export const fetchTracks = async () => {
  const apiToken = 'BQCheKvAxXwNPkmMsF_k1xppV1oFwCjuc48sEuK9dsBCny3HrQxZ8J3vWp_UuLks0VO2kVftK3XqHLgl3RXtUaXlTi-06hyMoeXlqT6Eag8rhjN1BSjQUdYcb_LbwLnojlfpw_79dxxvl_71H3krl8Me0GYqXEonRrRhShncp3GiPkWF0jvI_gYiBjIFa0F2pieuWN-o8XDEXSna0A'
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data :{items:SavedTrack[]} = await response.json();

  return data.items;
};