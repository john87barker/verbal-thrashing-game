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
/*  NOTE dictionaries
*/
let villain = {
  name: 'Alfred',
  life: 100,
  hits: 0,
  shield: 0,
  items: {
    therapy: {
      name: 'therapy',
      modifier: 2,
      description: 'I can talk these feelings out...I think...',
    },
    safeSpace: {
      name: 'safe space',
      modifier: 5,
      description: `You're not allowed here!`,
    },
    blanket: {
      name: 'blanket',
      modifier: 30,
      description: `Blanky`,

    }
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
let defense = {
  therapy: {
    name: 'therapy',
    modifier: 2,
    description: 'I can talk these feelings out...I think...',

  },
  safeSpace: {
    name: 'safe space',
    modifier: 5,
    description: `You're not allowed here!`,

  },
  blanket: {
    name: 'blanket',
    modifier: 30,
    description: `Blanky`,

  },

}

function insult(banana) {
  shield()

  villain.life += insults[banana].hp
  hit()
  update()
}

//adding defense to shield
function giveHelp(itemName) {
  // console.log(itemName)
  let dItem = villain.shield
  defense[itemName].modifier += dItem
  shield(itemName)
  // console.log(dItem)
  update()
}

function shield(itemName) {
  if (villain.shield >= 0) {
    console.log('[shield]', itemName)
    // villain.shield = + insults[banana]
  }
  villain.shield += 1
}




function hit() {
  villain.hits += 1
}
function cry() {
  if (villain.life <= 0) {
    window.alert(`You have made ${villain.name} cry! \n You are now a bad person! 😭`)
  }
}
function update() {

  document.getElementById('vName').innerText = villain.name
  document.getElementById('health').innerText = villain.life
  document.getElementById('hits').innerText = villain.hits
  document.getElementById('shield').innerText = villain.shield

  cry()
}







update()


// function deflect(banana) {
//   villain.life += defense[banana].modifier

//   hit()
//   update()
// }

