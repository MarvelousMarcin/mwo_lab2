class Player {
    constructor(id, coachId,name, surname, country, birthDate, height, weight){
        this.id = id;
        this.coachId = coachId;
        this.name = name;
        this.surname = surname;
        this.country = country;
        this.birthDate = birthDate;
        this.height = height;
        this.weight = weight;
    }

    showPlayerInfo() {
        return `Name: ${this.name} Surname: ${this.surname}\nCountry: ${this.country} Born: ${this.birthDate}\nWeight: ${this.weight} Height: ${this.height}
        `
    }
}

module.exports = Player;