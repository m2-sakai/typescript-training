# 課題 9: Never 型を学ぼう

## 目的

TypeScript の**Never 型**の使い方を学びます。

## 指示

1. Never 型を使用して、値が予期しない型の場合にエラーを投げる関数を作成してください。
2. 予期しない型の値が渡されたときにエラーメッセージを表示するようにしてください。

### 問題

以下のコードを完成させてください。

- ファイル: `question.ts`

```typescript
// Never型を使用して、値が予期しない型の場合にエラーを投げる関数を作成してください。
function assertNever(value /* Never型の型注釈をここに記述 */): never {
  throw new Error(`予期しない値: ${value}`);
}

// 使用例 (以下のコードを書かないとエラーになります)
assertNever('unexpected');
```
