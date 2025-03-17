// ESERCIZIO 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio/a di ${otherUser.firstName}`
    } else if (this.age < otherUser.age) {
      return `${otherUser.firstName} è più vecchio/a di ${this.firstName}`
    }
  }
}

const user1 = new User("Giulia", "Rizzo", 32, "Roma")
const user2 = new User("Gigggi", "Rossi", 40, "Milano")
console.log(user1)
console.log(user2)
console.log(user1.compareAge(user2))

// FINE ESERCIZIO 1

// ESERCIZIO 2

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
  compareOwnerName(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true
    } else {
      return false
    }
  }
}

const pet1 = new Pet("Zuzzurellone", "Mario", "gatto", "siamese")
const pet2 = new Pet("Giorgio", "Mario", "cane", "bassotto")
console.log(pet1.compareOwnerName(pet2))
console.log(pet1)
console.log(pet2)

const petNameInput = document.getElementById("petName")
const ownerNameInput = document.getElementById("ownerName")
const speciesInput = document.getElementById("species")
const breedInput = document.getElementById("breed")

const form = document.getElementById("pet-form")
const petList = document.getElementById("listElement")

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const user = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  )
  console.log("Nuovo utente registrato: ", user)

  const listElement = document.createElement("li")
  listElement.textContent = `PET NAME: ${user.petName} -- SPECIES: ${user.species} -- BREED: ${user.breed} -- OWNER: ${user.ownerName}`

  petList.appendChild(listElement)

  form.reset()
})
