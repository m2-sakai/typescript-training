// 制限されたジェネリック型を使った関数を定義してください。
function wrapInArray<T extends string | number>(value: T): T[] {
  // 引数を配列にして返します
  return [value];
}

// 使用例
const stringArray = wrapInArray('Hello'); // ["Hello"]
const numberArray = wrapInArray(42); // [42]
// const booleanArray = wrapInArray(true); // エラーになるべき
