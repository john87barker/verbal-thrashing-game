let life = 100

function slap() {
  life -= 1
  update()
}

function update() {
  document.getElementById('health').innerText = life

}







update()

// function losingHealth() {

//   for (let i = 100; i >= 0; i--) {
//     health = health - i

//   }
// }