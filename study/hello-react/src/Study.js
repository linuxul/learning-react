setTimeout(function() {
  console.log('hello world')
}, 1000)

setTimeout(() => {
  console.log('hello world')
}, 1000)

function BlackDog() {
  this.name = '흰둥이'

  return {
    name: '검둥이',
    bark: function() {
      console.log(this.name + ': 멍멍')
    }
  }
}

const blackDog = new BlackDog()
blackDog.bark()

function WhiteDog() {
  this.name = '흰둥이'
 
  return {
    name: '검둥이',
    bark: () => {
      console.log(this.name + ': 멍멍')
    }
  }
}

const whiteDog = new WhiteDog()
whiteDog.bark()
