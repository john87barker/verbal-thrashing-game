let life = 100
let name = ''
let hits = 0


function hit() {
  hits += 1
}

function silly() {
  life -= 1
  hit()
  update()
}

function honor() {
  life -= 5
  hit()
  update()
}
function momma() {
  life -= 10
  hit()
  update()
}

function update() {
  document.getElementById('health').innerText = life
  document.getElementById('hits').innerText = hits

}







update()

// function losingHealth() {

//   for (let i = 100; i >= 0; i--) {
//     health = health - i

//   }
// }