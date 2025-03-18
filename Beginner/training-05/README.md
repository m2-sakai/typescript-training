# 課題 5: Union 型と型の絞り込み

## 目的

Union 型と型の絞り込み (`type guards`) を学びます。

## 指示

1. Union 型を活用して、複数の型を持つデータを取り扱う関数を実装してください。

### 問題

以下のコードを完成させてください。

```typescript
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
```
