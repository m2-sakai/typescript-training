# 課題 1: 基本的な型を学ぼう

## 目的

TypeScript の基本的な型注釈 (`number`, `string`, `boolean` など) を学びます。

## 指示

1. `solution.ts` を編集して以下の関数に適切な型注釈を追加してください。
2. 関数を正常にコンパイルできるように修正してください。

### 問題

以下のコードを完成させてください。

```typescript
// 1. 名前（string型）と年齢（number型）を入力として受け取り、挨拶を返す関数を作成してください
function greet(
  name /* 型注釈をここに追加 */,
  age /* 型注釈をここに追加 */
) /* 戻り値の型注釈 */ {
  return `こんにちは、${name}さん！あなたは${age}歳ですね。`;
}

// 2. 値が `true` であるかを確認する関数 isTrue を実装してください
function isTrue(value /* 型注釈をここに追加 */) /* 戻り値の型注釈 */ {
  return value === true;
}
```
