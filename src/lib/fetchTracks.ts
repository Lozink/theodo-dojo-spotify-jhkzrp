const apiToken = '';
import { SavedTrack, Track } from 'spotify-types';

export const fetchTracks = async () => {
  const apiToken = 'BQD_rn7r7XLlrxj9QxA8z4brjmVJ94FLfbMtDWMK8Cplv-Yzj07lXr-ku3Qrm8i1Ydo4ZhW9dnzDCl_Erejbq4p30_FydADUyyUO_hNG9SPnUdWlxsI01JXqH6QYvuYJiSeITLeibgPqMvLX9qWXnFr_APs4lc-97yFsG1MdijI_jMoLIYO9nIYBE0_gTsamffWSQoo-JE6XUY_oFw'
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