// Class imports
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numSorter = new Sorter(numbersCollection);
numSorter.sort();
console.log(numSorter.collection.data);

// const strSorter = new Sorter("ZYXzyxba");
// strSorter.sort();
// console.log(strSorter.collection);