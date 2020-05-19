
const petimage = document.getElementById("petimage")
const eat = document.getElementById("eat");
const petStatus = document.getElementById("petStatus");


class CyberPet {
    constructor(name) {
        this.name = name;
        this.energyLevels = 100;
        this.hunger = 100;
        this.thirst = 100;
        this.hygiene = 100;
        this.bladder = 100;
        this.happiness = 100;
        this.alive();
        this.content();
    }
    eating() {
        this.hunger++;
        console.log(`${this.name} is eating`);
        this.energyLevels -= 10;
        console.log(`energy levels ${this.energyLevels}`);
        petimage.src = `img/fish.png`;
        petStatus.textContent = `${this.name} is eating`;
        setTimeout(() => {
            this.content();
        }, 5000);
        // setTimeout(() => this.eating(),2000);
        // console.log(this.hunger);
        // return this.hunger; 
    }
    drinking() {
        this.thirst++;
        console.log(`${this.name} is drinking`);
        this.energyLevels -= 5;
        console.log(`${this.energyLevels}`);
        petimage.src = `img/milk.png`;
        setTimeout(() => {
            this.content();
        }, 5000);
        
    }
    sleeping() {
        this.energyLevels += 50;
        console.log(`${this.name} is sleeping`);
        console.log(`${this.energyLevels}`);
        petimage.src = `img/sleeping.jpeg`;
        setTimeout(() => {
            this.content();
        }, 5000);
    }
    washing() {
        this.hygiene += 50;
        console.log(`${this.name} is bathing`);
        this.energyLevels -= 20;
        petimage.src = `img/duck.jpeg`;
        setTimeout(() => {
            this.content();
        }, 5000);
    }
    bathroom() {
        this.toilet += 50;
        console.log(`${this.name} is using the bathroom `);
        this.energyLevels -= 10;
        petimage.src = `img/toilet.jpeg`;
        setTimeout(() => {
            this.content();
        }, 5000);
    }
    playing() {
        this.happiness += 50;
        console.log(`${this.name} is currently playing`);
        this.energyLevels -= 10;
        petimage.src = `img/ball.jpeg`;
        setTimeout(() => {
            this.content();
        }, 5000);
    }
    alive() {
        console.log("pet is alive");
        // Every 2 second make bladder go down 1
        this.energyLevels-- ;
        this.hunger-- ;
        this.thirst-- ;
        this.hygiene-- ;
        this.bladder-- ;
        this.happiness-- ;
        console.log(`stats: hunger: ${this.hunger}, 
        energy: ${this.energyLevels}, 
        thirst: ${this.thirst},
        hygiene: ${this.hygiene},
        bladder: ${this.bladder},
        happiness: ${this.happiness} `)
        setTimeout(() => this.alive(),2000);
    }
    content() {
        console.log("Pet is perfectly fine");
        petimage.src = `img/cat.png`;
        petStatus.textContent = "";
    }
} 

// eat.addEventListener("click", () => {
//     console.log("eat button clicked")
//     eating();
//     petimage.src = img/fish.png;
// })
// document.addEventListener("DOMContentLoaded", this.alive())

const petOne = new CyberPet("Winston");
// petOne.alive();
// petOne.eating();
// petOne.drinking();
// petOne.sleeping();

class Cat extends CyberPet {
    constructor(name) {
        super(name);
    }
}