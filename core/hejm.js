
const lp= document.querySelector("#Screen")

const G= "甲乙丙丁戊己庚辛壬癸"
const Z= "子丑寅卯辰巳午未申酉戌亥"

let cu1= 0

const gz= e=> G[e %10] + Z[e %12]

function TTP(jug){
  const Tp= new Date

  const axis= {
    Y:Tp.getFullYear(),
    M:Tp.getMonth(),
    D:Tp.getDate(),
    H:Tp.getHours(),
    T:Tp.getMinutes(),
    S:Tp.getSeconds(),
    W:Tp.getDay()
  }

  return axis[jug] || axis
}


// let pc= setInterval(poz, 1000)


function stop(){
  clearInterval(pc)
}
function gon(){
  pc= setInterval(TTP, 1000)
}

function poz(){
  let s= TTP("S")
  let r= gz(s)
  lp.innerHTML= r

  console.log(s)
}