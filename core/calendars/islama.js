// 伊斯兰历

const kalendaroName= 'islama';
const saltaJaro= [2,5,7,10,13,16,18,31,24,26,29];

function islama(DCy){
  let AHy= DCy -622 + Math.floor((DCy -622) / 32);
  let DCy= AHy +622 - Math.floor(AHy /33);
}

// const AHy=(DCy)=> DCy -622 + Math.floor((DCy -622) / 32);
// const DCy=(AHy)=> AHy +622 - Math.floor(AHy /33);