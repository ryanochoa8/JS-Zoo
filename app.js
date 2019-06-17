class Zebra {
  constructor(name, height, weight, gender, food, noise, tailLength) {
    this.name = name;
    this.type = "zebra";
    this.height = height;
    this.weight = weight;
    this.gender = gender;
    this.food = food;
    this.noise = noise;
    this.tailLength = tailLength;
  }
  speak() {
    alert(`${this.name} the ${this.type} says ${this.noise}`)
  }
  feed() {
    alert(`You fed ${this.name} some ${this.food}.`)
  }
  wave() {
    alert(`${this.name} waved ${this.gender} ${this.tailLength} inch tail at you!`)
  }
}

let zeb = new Zebra("Zeb", 54, 210, "his", "grass", "'whinnnnney!'", 13)

let jinny = new Zebra("Jinny", 48, 180, "her", "dry grass", "'whinnnnney!'", 12)

let zach = new Zebra("Zach", 60, 230, "his", "crab grass", "'whinnnnney!'", 14.5)


class Monkey {
  constructor(name, height, weight, gender, food, swingDistance, noise) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
    this.food = food;
    this.swingDistance = swingDistance;
    this.noise = noise;
  }
  speak() {
    alert(`${this.name} yelled ${this.noise}`)
  }
  feed() {
    alert(`You tossed ${this.name} some ${this.food}.`)
  }
  takePicture() {
    alert(`${this.name} snatched the device right out of your hands!`)
  }
}

let george = new Monkey("George", 29, 83, "he", "bugs", 7, "OOOO OOOO OOOO AHHHH AHHHH AHHHH!")

let samantha = new Monkey("Samantha", 25, 67, "she", "fruit", 6.5, "hoo hoo hoo AHH AHH AHH!")

let chester = new Monkey("Chester", 30, 88, "he", "bugs & fruit", 8, "oOoOoOo oOoOoOo AhhHhhH aHHhHHh")