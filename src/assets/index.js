
// Para poder crear una instancia de "Media Player" habra que importarla
// A su vez en "MediaPlayer.js" habra que expotar el modulo haciendo al final
// del archivo un "export default MediaPlayer"

import MediaPlayer from './MediaPlayer.js'
import Autoplay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'


const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new Autoplay(),new AutoPause]
});

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').catch(error =>{
    console.log(error.message);
  })
}

const button = document.querySelector('#playPause');
const muteUnmute = document.querySelector('#unmuteMute');
button.onclick = () => player.togglePlay();
muteUnmute.onclick=() =>player.unmuteMute();