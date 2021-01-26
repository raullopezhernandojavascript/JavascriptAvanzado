function AutoPlay(){
    AutoPlay.prototype.run = function(player){
        player.unmuteMute();
        player.play();
    }

}


export default AutoPlay;