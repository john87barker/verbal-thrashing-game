// let villains = {
//   //A: {
//     name: 'Alfred',
//     life: 100,
//     hits: 0
//   },
// B: {
//   name: 'Boris',
//   life: 100,
//   hits: 0
// }
//}
let villain = {
  name: 'Alfred',
  life: 100,
  hits: 0
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
  villain.hits += 1
}
function cry() {
  if (villain.life <= 0) {
    window.alert(`You have made ${villain.name} cry! \n You are now a bad person! 😭`)
  }
}

function insult(banana) {
  villain.life += insults[banana].hp
  hit()
  update()

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

  document.getElementById('vName').innerText = villain.name
  document.getElementById('health').innerText = villain.life
  document.getElementById('hits').innerText = villain.hits
  cry()
}







update()

// function losingHealth() {

//   for (let i = 100; i >= 0; i--) {
//     health = health - i

//   }
// }