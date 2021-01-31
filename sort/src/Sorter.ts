interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    // Use a type guard to index errors with logic when working with strings
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if(this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
    

    // If collection is a string, do this instead by comparing char codes
    // rather than values
    if (typeof this.collection == 'string') {

    }
  }
}