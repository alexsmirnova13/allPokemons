import axios from 'axios';

export function Pokemon(name, url) {
	this.name = name;
	this.url = url;
	this.isLoaded = false;
	this.getIdFromUrl();
}

Pokemon.prototype.getIdFromUrl = function () {
	const idRegExp = /(?<=pokemon\/)\d+/;
	this.id = Number(this.url.match(idRegExp).toString());
};

Pokemon.prototype.update = async function () {
	const data = await axios.get(this.url).then(resp => resp.data);
	this.picture = data.sprites.other['official-artwork'].front_default;
	this.weight = data.weight;
	this.stats = data.stats.map(unit => `${unit.stat.name}: ${unit.base_stat}`);
	this.abilities = data.abilities.map(unit => unit.ability.name);
	this.types = data.types.map(unit => unit.type.name);
	this.isLoaded = true;
	this.height = data.height;
	this.baseExperience = data.base_experience;
};

Pokemon.prototype.load = async function () {
	if (!this.isLoaded) {
		await this.update();
	}
};

