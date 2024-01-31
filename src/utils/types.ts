export enum Direction {
  Ascending = "ascending",
  Descending = "descending",
};

export enum ElementStates {
  Default = "default",
  Changing = "changing",
  Modified = "modified",
};

export type TextSymbolType = {
  value: string,
  state: ElementStates
};
