//Dz_1
//const plus = document.querySelector('#increment')
//const  minus = document.querySelector('#decrement')
//const  reset = document.querySelector('#reset')
//const  num = document.querySelector('.number')
//let number = 0

//plus.onclick = () => {
  //  number ++
 //   num.innerText = number
 //   num.style.color = "green"
//}
//minus.onclick = () => {
//    number --
 //   if (number < 1 ){
 //       number = 0
 //   }
 //   num.innerText = number
 //   num.style.color = "red"
//}
//reset.onclick = () => {
   // number = 0
  //  num.innerText = number
  //  num.style.color = "gray"
//}

//Dz_2
// const posX = document.querySelector('#posX')
// const posY = document.querySelector('#posY')
// const box = document.querySelector('.box')
//
// box.onmousemove = b => {
//     posX.innerHTML = b.x
//     posY.innerHTML = b.y
// }
//Dz_3
const color = prompt('Введите цвет \nКрасный, \nЖелтый, \nЗеленый :').trim().toLowerCase()
const Red = document.getElementsByClassName('red')
const Yellow = document.getElementsByClassName('yellow')
const Green = document.getElementsByClassName('green')


switch (color) {
    case 'красный':
    case 'red':
        Red[0].style.background = 'red'
        Red[0].innerHTML = 'Stop'
        break;
    case 'желтый':
    case 'yellow':
        Yellow[0].style.background = 'yellow'
        Yellow[0].innerHTML = 'Wait'
        break;
    case 'зеленый':
    case 'green':
        Green[0].style.background = 'green'
        Green[0].innerHTML = 'GO'
        break;
    default:
        Red[0].style.background = 'red'
        Yellow[0].style.background = 'yellow'
        Green[0].style.background = 'green'
        Red[0].innerHTML = "Укажите"
        Yellow[0].innerHTML = "цвета"
        Green[0].innerHTML = "светофора"
}