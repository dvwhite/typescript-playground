import { NumbersCollection } from './NumbersCollection';

export class Sorter {
  constructor(public collection: NumbersCollection) {
  }

  sort(): void {
    const { length } = this.collection;

    // Use a type guard to index errors with logic when working with strings
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if(this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
    

    // If collection is a string, do this instead by comparing char codes
    // rather than values
    if (typeof this.collection == 'string') {

    }
  }
}