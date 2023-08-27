export function defaultCompare<T>(a: T, b: T): number {
  switch (true) {
    case a === b:
      return Compare.EQUALS;
    case a > b:
      return Compare.BIGGER_THAN;
    default:
      return Compare.EQUALS;
  }
}

export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}
