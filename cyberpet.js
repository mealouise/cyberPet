
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
        this.fun = 100;
        this.alive();
    }
    eating() {
        this.hunger++;
        console.log(`${this.name} is eating`);
        this.energyLevels -= 10;
        console.log(`energy levels ${this.energyLevels}`);
        petimage.src = `img/fish.png`;
        petStatus.textContent = `${this.name} is eating`
        // console.log(this.hunger);
        // return this.hunger; 
    }
    drinking() {
        this.thirst++;
        console.log(`${this.name} is drinking`);
        this.energyLevels -= 5;
        console.log(`${this.energyLevels}`);
        petimage.src = `img/milk.png`;
    }
    sleeping() {
        this.energyLevels += 50;
        console.log(`${this.name} is sleeping`);
        console.log(`${this.energyLevels}`);
        petimage.src = `img/sleeping.jpeg`;
    }
    washing() {
        this.hygiene += 50;
        console.log(`${this.name} is bathing`);
        this.energyLevels -= 20; 
    }
    bathroom() {
        this.toilet += 50;
        console.log(`${this.name} is using the bathroom `);
        this.energyLevels -= 10; 
    }
    fun() {
    }
    alive() {
        console.log("pet is alive");
        petimage.src = `img/cat.png`;
        setTimeout(() => this.alive(),2000);
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
petOne.drinking();
petOne.sleeping();

class Cat extends CyberPet {
    constructor(name) {
        super(name);
    }
}