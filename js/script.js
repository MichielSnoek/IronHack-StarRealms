class Area {
  constructor () {
    this.deck = []
    this.row = []
    this.pile = []
  }

  drawCardToRow (ammount) {
    for (let i = 0; i < ammount; i++) {
      const randomIndex = Math.floor(Math.random() * this.deck.length)
      const card = this.deck.splice(randomIndex, 1)
      this.row.push(card[0])
    }
  }

  pileToRow () {
    for (let i = this.pile.length; i > 0; i--) {
      const card = this.pile.splice(i - 1, 1)
      this.deck.push(card[0])
    }
  }

  removeCardToPile (ammount) {
    for (let i = 0; i < ammount; i++) {
      const randomIndex = Math.floor(Math.random() * this.row.length)
      const card = this.row.splice(randomIndex, 1)
      this.pile.push(card[0])
    }
  }
}
class Card {
  constructor (name, cost, attack, trade, heal, defense, skill, faction, scrap, scrapValue, imgsrc) {
    this.name = name
    this.cost = cost
    this.attack = attack
    this.trade = trade
    this.heal = heal
    this.defense = defense
    this.skill = skill
    this.faction = faction
    this.scrap = scrap
    this.scrapValue = scrapValue
    this.imgsrc = imgsrc
  }
}
class GameOperator {
  constructor () {
    this.boss = new Area()
    this.tradeArea = new Area()
    this.player = new Area()
    this.playerDeck = [
      {
        name: 'viper',
        cost: 0,
        attack: 1,
        trade: 0,
        heal: 0,
        defense: 0,
        skill: '',
        faction: '',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 0,
          skill: ''
        },
        imgsrc: './img/Icons/Cards/Viper.png'
      }, {
        name: 'viper',
        cost: 0,
        attack: 1,
        trade: 0,
        heal: 0,
        defense: 0,
        skill: '',
        faction: '',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 0,
          skill: ''
        },
        imgsrc: './img/Icons/Cards/Viper.png'
      }, {
        name: 'scout',
        cost: 0,
        attack: 0,
        trade: 1,
        heal: 0,
        defense: 0,
        skill: '',
        faction: '',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 0,
          skill: ''
        },
        imgsrc: './img/Icons/Cards/Scout.png'
      }, {
        name: 'scout',
        cost: 0,
        attack: 0,
        trade: 1,
        heal: 0,
        defense: 0,
        skill: '',
        faction: '',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 0,
          skill: ''
        },
        imgsrc: './img/Icons/Cards/Scout.png'
      }, {
        name: 'scout',
        cost: 0,
        attack: 0,
        trade: 1,
        heal: 0,
        defense: 0,
        skill: '',
        faction: '',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 0,
          skill: ''
        },
        imgsrc: './img/Icons/Cards/Scout.png'
      }, {
        name: 'scout',
        cost: 0,
        attack: 0,
        trade: 1,
        heal: 0,
        defense: 0,
        skill: '',
        faction: '',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 0,
          skill: ''
        },
        imgsrc: './img/Icons/Cards/Scout.png'
      }, {
        name: 'scout',
        cost: 0,
        attack: 0,
        trade: 1,
        heal: 0,
        defense: 0,
        skill: '',
        faction: '',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 0,
          skill: ''
        },
        imgsrc: './img/Icons/Cards/Scout.png'
      }, {
        name: 'scout',
        cost: 0,
        attack: 0,
        trade: 1,
        heal: 0,
        defense: 0,
        skill: '',
        faction: '',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 0,
          skill: ''
        },
        imgsrc: './img/Icons/Cards/Scout.png'
      }
    ]
    this.starterDeck = [
      {
        name: 'Solar-Skiff',
        cost: 1,
        attack: 0,
        trade: 2,
        heal: 0,
        defense: 0,
        skill: 'draw',
        faction: 'blue',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 0,
          skill: ''
        },
        imgsrc: './img/Blue/Cards/Solar-Skiff.png'
      }, {
        name: 'Colony-Seed-Ship',
        cost: 5,
        attack: 3,
        trade: 3,
        heal: 3,
        skill: '',
        faction: 'blue',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 0,
          skill: ''
        },
        imgsrc: './img/Blue/Cards/Colony-Seed-Ship.png'
      }, {
        name: 'peaceKeeper',
        cost: 6,
        attack: 6,
        trade: 0,
        heal: 6,
        defense: 0,
        skill: 'draw',
        faction: 'blue',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 3,
          skill: ''
        },
        imgsrc: './img/Blue/Cards/PeaceKeeper.png'
      }, {
        name: 'Trade-Hauler',
        cost: 2,
        attack: 0,
        trade: 3,
        heal: 3,
        defense: 0,
        skill: '',
        faction: 'blue',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 0,
          skill: ''
        },
        imgsrc: './img/Blue/Cards/Trade-Hauler.png'
      }, {
        name: 'Patrol-Cutter',
        cost: 3,
        attack: 3,
        trade: 2,
        heal: 4,
        defense: 0,
        skill: '',
        faction: 'blue',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 0,
          skill: ''
        },
        imgsrc: './img/Blue/Cards/Patrol-Cutter.png'
      }, {
        name: 'cargoPod',
        cost: 3,
        attack: 3,
        trade: 3,
        heal: 0,
        defense: 0,
        skill: '',
        faction: 'green',
        scrap: true,
        scrapValue: {
          trade: 0,
          attack: 3,
          skill: ''
        },
        imgsrc: './img/Green/Cards/Cargo-Pod.png'
      }, {
        name: 'Moonwurm',
        cost: 7,
        attack: 8,
        trade: 0,
        heal: 0,
        defense: 0,
        skill: 'draw',
        faction: 'green',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 3,
          skill: ''
        },
        imgsrc: './img/Green/Cards/Moonwurm.png'
      }, {
        name: 'Predator',
        cost: 2,
        attack: 4,
        trade: 0,
        heal: 0,
        defense: 0,
        skill: 'draw',
        faction: 'green',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 3,
          skill: ''
        },
        imgsrc: './img/Green/Cards/Predator.png'
      }, {
        name: 'Battle-Bot',
        cost: 1,
        attack: 4,
        trade: 0,
        heal: 0,
        skill: '',
        defense: 0,
        faction: 'red',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 3,
          skill: ''
        },
        imgsrc: './img/Red/Cards/Battle-Bot.png'
      }, {
        name: 'Convoy-Bot',
        cost: 3,
        attack: 6,
        trade: 0,
        heal: 0,
        skill: '',
        defense: 0,
        faction: 'red',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 3,
          skill: ''
        },
        imgsrc: './img/Red/Cards/Convoy-Bot.png'
      }, {
        name: 'Mech-Cruiser',
        cost: 5,
        attack: 6,
        trade: 0,
        heal: 0,
        skill: '',
        defense: 0,
        faction: 'red',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 3,
          skill: ''
        },
        imgsrc: './img/Red/Cards/Mech-Cruiser.png'
      }, {
        name: 'Mining-Mech',
        cost: 4,
        attack: 3,
        trade: 3,
        heal: 0,
        skill: '',
        defense: 0,
        faction: 'red',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 3,
          skill: ''
        },
        imgsrc: './img/Red/Cards/Mining-Mech.png'
      }, {
        name: 'Repair-Bot',
        cost: 2,
        attack: 0,
        trade: 2,
        heal: 0,
        skill: '',
        defense: 0,
        faction: 'red',
        scrap: true,
        scrapValue: {
          trade: 0,
          attack: 2,
          skill: ''
        },
        imgsrc: './img/Red/Cards/Repair-Bot.png'
      }, {
        name: 'The-Wrecker',
        cost: 7,
        attack: 6,
        trade: 0,
        heal: 0,
        skill: 'draw',
        defense: 0,
        faction: 'red',
        scrap: false,
        scrapValue: {
          trade: 0,
          attack: 2,
          skill: ''
        },
        imgsrc: './img/Red/Cards/The-Wrecker.png'
      }, {
        name: 'Heavy-Cruiser',
        cost: 5,
        attack: 4,
        trade: 0,
        heal: 0,
        skill: 'draw',
        defense: 0,
        faction: 'red',
        scrap: false,
        scrapValue: {
          trade: 4,
          attack: 0,
          skill: 'draw'
        },
        imgsrc: './img/Yellow/Cards/Heavy-Cruiser.png'
      }, {
        name: 'Gunship',
        cost: 4,
        attack: 5,
        trade: 0,
        heal: 0,
        skill: '',
        defense: 0,
        faction: 'red',
        scrap: true,
        scrapValue: {
          trade: 4,
          attack: 0,
          skill: ''
        },
        imgsrc: './img/Yellow/Cards/Gunship.png'
      }
    ]
  }

  initialiseStarterDecks () {
    this.playerDeck.forEach(card => {
      this.player.deck.push(new Card(card.name, card.cost, card.attack, card.trade, card.heal, card.defense, card.skill, card.faction, card.scrap, card.scrapValue, card.imgsrc))
    })
    for (let i = 0; i < 4; i++) {
      this.starterDeck.forEach(card => {
        this.tradeArea.deck.push(new Card(card.name, card.cost, card.attack, card.trade, card.heal, card.defense, card.skill, card.faction, card.scrap, card.scrapValue, card.imgsrc))
      })
    }
    this.tradeArea.drawCardToRow(5)
    this.renderDom()

    const endTurn = document.querySelector('.end-turn')
    const drawHand = document.querySelector('.draw-hand')
    const attackBoss = document.querySelector('.attack')
    const drawCard = document.querySelector('.draw-card')
    const notEnoughTrade = document.querySelector('#no-trade')
    endTurn.style.display = 'none'
    drawHand.style.display = 'initial'
    attackBoss.style.display = 'none'
    drawCard.style.display = 'none'
    notEnoughTrade.style.display = 'none'
  }

  removeCardsFromElement () {
    const tradeRow = document.querySelector('.trade-row')
    const playerRow = document.querySelector('.player-row')
    const bossRow = document.querySelector('.boss-row')

    while (tradeRow.firstChild) {
      tradeRow.removeChild(tradeRow.firstChild)
    }
    while (playerRow.firstChild) {
      playerRow.removeChild(playerRow.firstChild)
    }
    while (bossRow.firstChild) {
      bossRow.removeChild(bossRow.firstChild)
    }
  }

  buyCard () {
    const tradeRow = document.querySelector('.trade-row')
    const playerTrade = document.querySelector('#player-trade input')
    const notEnoughTrade = document.querySelector('#no-trade')
    const that = this
    tradeRow.addEventListener('click', function (e) {
      that.ifTradeDeckisEmptyFillIt()
      const index = e.target.dataset.index
      if (Number(that.tradeArea.row[index].cost) <= Number(playerTrade.value)) {
        const card = that.tradeArea.row.splice(index, 1)
        playerTrade.value -= card[0].cost
        that.player.deck.push(card[0])
        that.tradeArea.drawCardToRow(1)
        that.renderDom()
      } else {
        notEnoughTrade.style.display = 'initial'
        setTimeout(function () {
          notEnoughTrade.style.display = 'none'
        }, 2000)
      }
    })
    const explorerImg = document.querySelector('#explorer img')
    const explorer = new Card('Explorer', 2, 0, 2, 0, '', 0, '', true, { trade: 0, attack: 2, skill: '' }, './img/Icons/Cards/Explorer.png')
    explorerImg.addEventListener('click', function () {
      if (Number(explorer.cost) <= Number(playerTrade.value)) {
        that.player.deck.push(explorer)
        playerTrade.value -= explorer.cost
        that.renderDom()
      } else {
        notEnoughTrade.style.display = 'initial'
        setTimeout(function () {
          notEnoughTrade.style.display = 'none'
        }, 2000)
      }
    })
  }

  scrapCard () {
    const playerRow = document.querySelector('.player-row')
    const playerTrade = document.querySelector('#player-trade input')
    const playerAttack = document.querySelector('#player-attack input')
    const that = this
    playerRow.addEventListener('click', function (e) {
      const index = e.target.dataset.index
      if (that.player.row[index].scrap === true) {
        const card = that.player.row.splice(index, 1)
        that.tradeArea.pile.push(card[0])
        console.log('this is the current player trade value', playerTrade.value)
        console.log('this is the current player attack value', playerAttack.value)
        console.log('this is the scrap attack of the explorer',card[0].scrapValue.attack)
        playerTrade.value = Number(playerTrade.value) + card[0].scrapValue.trade
        playerAttack.value = Number(playerAttack.value) + card[0].scrapValue.attack
        console.log('this is the current player trade value', playerTrade.value)
        console.log('this is the current player attack value', playerAttack.value)
        that.renderDom()
      }
    })
  }

  drawCard () {
    this.player.row.forEach(card => {
      if (card.skill === 'draw') {
        this.ifTradeDeckisEmptyFillIt()
        this.player.drawCardToRow(1)
        while (this.player.row[this.player.row.length - 1].skill === 'draw') {
          this.ifTradeDeckisEmptyFillIt()
          this.player.drawCardToRow(1)
        }
        this.renderDom()
        this.updateStats()
      }
    })
  }

  drawHand () {
    const endTurn = document.querySelector('.end-turn')
    const drawHand = document.querySelector('.draw-hand')
    const attackBoss = document.querySelector('.attack')
    const that = this
    drawHand.addEventListener('click', function () {
      that.pushBossCardsToScrap()
      that.ifTradeDeckisEmptyFillIt()
      that.player.drawCardToRow(5)
      that.updateStats()
      that.renderDom()
      that.drawCard()
      drawHand.style.display = 'none'
      endTurn.style.display = 'initial'
      attackBoss.style.display = 'initial'
      console.log('this is the player row', that.player.row)
      console.log('this is the tradeArea scrap', that.tradeArea.pile)
    })
  }

  attackBoss () {
    const attackBossBtn = document.querySelector('.attack')
    const bossHealth = document.querySelector('#boss-health input')
    const playerAttack = document.querySelector('#player-attack input')
    const that = this
    attackBossBtn.addEventListener('click', function () {
      bossHealth.value -= playerAttack.value
      playerAttack.value = 0
      attackBossBtn.style.display = 'none'
      that.start()
    })
  }

  attackPlayer () {
    const bossAttack = document.querySelector('#boss-attack input')
    const playerHealth = document.querySelector('#player-health input')
    playerHealth.value -= bossAttack.value
    bossAttack.value = 0
    this.start()
  }

  pushBossCardsToScrap () {
    for (let i = this.boss.row.length; i > 0; i--) {
      const card = this.boss.row.splice(i - 1, 1)
      this.tradeArea.pile.push(card[0])
    }
  }

  bossDraw () {
    const assimilationCount = document.querySelector('#boss-assimilation input')
    let currentAssimilationCount = assimilationCount.value

    const randomIndex = Math.floor(Math.random() * this.tradeArea.deck.length)
    const card = this.tradeArea.deck.splice(randomIndex, 1)
    this.boss.row.push(card[0])
    let index = 0
    while (currentAssimilationCount >= this.boss.row[index].cost) {
      const randomIndex = Math.floor(Math.random() * this.tradeArea.deck.length)
      const card = this.tradeArea.deck.splice(randomIndex, 1)
      this.boss.row.push(card[0])
      currentAssimilationCount = currentAssimilationCount - Number(this.boss.row[index].cost)
      index += 1
    }
    assimilationCount.value = Number(assimilationCount.value) + 1
  }

  endTurn () {
    const endTurn = document.querySelector('.end-turn')
    const drawHand = document.querySelector('.draw-hand')
    const attackBoss = document.querySelector('.attack')
    const that = this
    endTurn.addEventListener('click', function () {
      that.ifTradeDeckisEmptyFillIt()
      that.player.removeCardToPile(that.player.row.length)
      that.updateStats()
      that.bossDraw()
      setTimeout(function () {
        that.attackPlayer()
        drawHand.style.display = 'initial'
      }, 2000)
      that.renderDom()
      endTurn.style.display = 'none'
      attackBoss.style.display = 'none'
    })
  }

  ifTradeDeckisEmptyFillIt () {
    if (this.tradeArea.deck.length === 0) {
      this.tradeArea.pileToRow()
    }
    if (this.player.deck.length < 5) {
      this.player.pileToRow()
    }
  }

  updateStats () {
    const playerTrade = document.querySelector('#player-trade input')
    const playerAttack = document.querySelector('#player-attack input')
    const playerHealth = document.querySelector('#player-health input')
    // const playerDefence = document.querySelector('#player-defence input')

    playerTrade.value = this.player.row.reduce(function (a, b) {
      return a + b.trade
    }, 0)
    playerAttack.value = this.player.row.reduce(function (a, b) {
      return a + b.attack
    }, 0)
    playerHealth.value = Number(playerHealth.value) + this.player.row.reduce(function (a, b) {
      return a + b.heal
    }, 0)
  }

  renderDom () {
    this.removeCardsFromElement()
    const tradeRow = document.querySelector('.trade-row')
    const playerRow = document.querySelector('.player-row')
    const bossRow = document.querySelector('.boss-row')

    const tradeDeckCount = document.querySelector('.trade-deck-count input')
    const tradePileCount = document.querySelector('.trade-pile-count input')
    const playerDeckCount = document.querySelector('.player-deck-count input')
    const playerPileCount = document.querySelector('.player-pile-count input')

    const bossHealth = document.querySelector('#boss-health input')
    const bossAttack = document.querySelector('#boss-attack input')
    // const bossDefence = document.querySelector('#boss-defence input')

    if (this.tradeArea.row.length > 0) {
      for (let i = 0; i < this.tradeArea.row.length; i++) {
        const imgElement = document.createElement('img')
        imgElement.src = this.tradeArea.row[i].imgsrc
        imgElement.dataset.index = i
        tradeRow.appendChild(imgElement)
      }
    }
    if (this.boss.row.length > 0) {
      for (let i = 0; i < this.boss.row.length; i++) {
        const imgElement = document.createElement('img')
        imgElement.src = this.boss.row[i].imgsrc
        imgElement.dataset.index = i
        bossRow.appendChild(imgElement)
      }
      bossAttack.value = this.boss.row.reduce(function (a, b) {
        return a + b.trade
      }, 0) + this.boss.row.reduce(function (a, b) {
        return a + b.attack
      }, 0)
      bossHealth.value = Number(bossHealth.value) + this.boss.row.reduce(function (a, b) {
        return a + b.heal
      }, 0)
    }
    if (this.player.row.length > 0) {
      for (let i = 0; i < this.player.row.length; i++) {
        const imgElement = document.createElement('img')
        imgElement.src = this.player.row[i].imgsrc
        imgElement.dataset.index = i
        playerRow.appendChild(imgElement)
      }
    }
    tradeDeckCount.value = this.tradeArea.deck.length
    tradePileCount.value = this.tradeArea.pile.length
    playerDeckCount.value = this.player.deck.length
    playerPileCount.value = this.player.pile.length
  }

  start () {
    const overlay = document.querySelector('.overlay')
    const playerName = document.querySelector('#player-name p')
    const playerNameInput = document.querySelector('.overlay input')
    const button = document.querySelector('.overlay button')
    button.addEventListener('click', function () {
      playerName.innerHTML = playerNameInput.value
      overlay.style.display = 'none'
    })

    const bossHealth = document.querySelector('#boss-health input')
    const playerHealth = document.querySelector('#player-health input')
    if (bossHealth.value <= 0 || playerHealth.value <= 0) {
      location.reload()
    }
  }

  closeInfoWindow () {
    const closeBtn = document.querySelector('#close-window')
    const ulList = document.querySelector('.some-explenation ul')
    const parentElement = document.querySelector('.some-explenation')
    closeBtn.addEventListener('click', function () {
      if (ulList.style.display === 'none') {
        ulList.style.display = 'inherit'
        parentElement.style.height = '156px'
        closeBtn.innerHTML = 'x close window'
      } else {
        ulList.style.display = 'none'
        parentElement.style.height = '20px'
        closeBtn.innerHTML = 'open window'
      }
    })
  }

  initializer () {
    this.start()
    this.initialiseStarterDecks()
    this.buyCard()
    this.drawHand()
    this.attackBoss()
    this.endTurn()
    this.scrapCard()
    this.closeInfoWindow()
  }
}

const game = new GameOperator()

game.initializer()
