# 課題 4: 関数のオプション引数とデフォルト値

## 目的

関数にオプション引数やデフォルト値を設定する方法を学びます。

## 指示

1. 以下の関数にオプション引数とデフォルト値を追加してください。
2. 型エラーが出ないように修正してください。

### 問題

以下のコードを完成させてください。

```typescript
// オプション引数を持つ関数を作成してください
function createUser(
  name: string,
  age: number,
  isAdmin /* オプション引数 */ = false
): string {
  return `${name} (${age}歳): 管理者: ${isAdmin ? 'はい' : 'いいえ'}`;
}

// 使用例
console.log(createUser('John', 25)); // "John (25歳): 管理者: いいえ"
console.log(createUser('Alice', 30, true)); // "Alice (30歳): 管理者: はい"
```
