let life = 100

function slap() {

  life -= 1

  console.log(life)

  document.getElementById('health').innerText = life

}
function losingHealth() {

  for (let i = 100; i >= 0; i--) {
    health = health - i

  }
}