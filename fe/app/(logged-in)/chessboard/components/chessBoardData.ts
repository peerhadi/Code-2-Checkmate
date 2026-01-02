
// app/chess/components/chessBoardData.ts

export type ChessPiece =
  | 'br' | 'bn' | 'bb' | 'bq' | 'bk' | 'bp'
  | 'wr' | 'wn' | 'wb' | 'wq' | 'wk' | 'wp'
  | null;

export const initialBoard: ChessPiece[][] = [
  ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
  ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
  ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
];
