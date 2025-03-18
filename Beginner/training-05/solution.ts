type Input = string | number;

function formatInput(input: Input): string {
  if (typeof input === 'string') {
    return `文字列入力: ${input}`;
  } else {
    return `数値入力: ${input}`;
  }
}

// 使用例
console.log(formatInput('hello')); // 文字列入力: hello
console.log(formatInput(42)); // 数値入力: 42
