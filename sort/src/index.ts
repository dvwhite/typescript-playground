// Class imports
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numSorter = new Sorter(numbersCollection);
numSorter.sort();
console.log(numSorter.collection.data);

const charactersCollection = new CharactersCollection("Xaayb");
const strSorter = new Sorter(charactersCollection);
strSorter.sort();
console.log(charactersCollection.data);