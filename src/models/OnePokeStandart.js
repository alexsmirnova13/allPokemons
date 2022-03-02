function OnePokeStandart(obj) {
	this.abilities = obj.abilities.map(unit => unit.ability.name);
	this.types = obj.types.map(unit => unit.type.name);
	this.weight = obj.weight;
	this.name = obj.name;
	this.imageURL = obj.sprites.other['official-artwork'].front_default;
	this.id = obj.id;
	this.catched = false;
	this.baseExperience = obj.base_experience;
	this.height = obj.height;
}

export default OnePokeStandart;
