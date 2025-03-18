# 課題 12: 制限されたジェネリック型を作ろう

## 目的

TypeScript のジェネリック型に**制約を設ける**方法を学びます。

## 指示

1. ジェネリック型を使って、`T` が文字列または数値であることを制約に加えてください。
2. 関数でジェネリック型を使い、その型の配列を返却するようにしてください。

### 問題

以下のコードを完成させてください。

- ファイル: `question.ts`

```typescript
// 制限されたジェネリック型を使った関数を定義してください。
function wrapInArray<T /* 制約を追加 */>(value: T): T[] {
  // 引数を配列にして返します
  return [value];
}

// 使用例
const stringArray = wrapInArray('Hello'); // ["Hello"]
const numberArray = wrapInArray(42); // [42]
// const booleanArray = wrapInArray(true); // エラーになるべき
```
