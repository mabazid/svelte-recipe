import { writable } from 'svelte/store';
import { Under30 } from '../dummy/under30';

const recipies = writable(Under30.results);

const recipieStore = {
	subscribe: recipies.subscribe,
};

export default recipieStore;
