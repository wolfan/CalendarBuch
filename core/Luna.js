// 公历转农历的实现

function tago(Y,M,D){
  const vY= 12.36827;
  const vM= 29.5;
  const vD= 10.6;
  const moonDay= ;
  const v1= Y - 1977;
  const Q= Math.floor(v1 / 4);
  const R= v1 % 4;

  const nF= ((14 * Q) + (vD * (R + 1)) + moonDay) / vM; 
  const n= nF.replace('','$1');
}