// 関数オーバーロードを宣言してください
function getLength(input: number): number;
function getLength(input: string): number;

// 実装する関数
function getLength(input: string | number): number {
  // 実装を記述してください
  if (typeof input === 'string') {
    return input.length;
  }
  return input.toString().length;
}

// 使用例
console.log(getLength(12345)); // 5（数値を文字列に変換してその長さを返す）
console.log(getLength('TypeScript')); // 10（文字列の長さを返す）
