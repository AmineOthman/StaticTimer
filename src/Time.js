import React from 'react';



function Time(ms){
    
    var ms = 1800000;

    let seconds = Math.floor(ms/1000);
    let sec= seconds % 60;
        if (sec<10) {sec="0"+sec};
    let min= Math.floor((seconds % 3600)/60);
        if (min<10) {min="0"+min};
    let h= Math.floor(seconds / 3600);
        if (h<10) {h="0"+h};
return (h +':'+ min +':'+  sec) 

}

export default Time;
