let villains = {
  A: {
    name: 'Alfred',
    life = 100,
    hits = 0
  },
  B: {
    name: 'Boris',
    life = 100,
    hits = 0
  }
}
let insults = {
  silly: {
    name: 'silly',
    hp: -1,
  },
  honor: {
    name: 'honor',
    hp: -5,
  },
  momma: {
    name: 'momma',
    hp: -10,
  }
}

function hit() {
  hits += 1
}

// function silly() {
//   life -= 1
//   hit()
//   update()
// }

// function honor() {
//   life -= 5
//   hit()
//   update()
// }
// function momma() {
//   life -= 10
//   hit()
//   update()
// }

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