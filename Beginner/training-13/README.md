# 課題 13: クラスで型を扱う

## 目的

TypeScript で**クラスの型定義**を行い、クラスを使ったプログラミング手法を学びます。

## 指示

1. ユーザーを表す `User` クラスを作成してください。
   - プロパティ: `name` (文字列型), `age` (数値型)
   - メソッド: `greet()` - ユーザーの挨拶文を返す
2. クラスをインスタンス化して動作を確認してください。

### 問題

以下のコードを完成させてください。

- ファイル: `question.ts`

```typescript
// Userクラスを作成してください
class User /* 型注釈をここに記述 */ {
  // クラスのプロパティとコンストラクタを実装してください
  constructor(name: string, age: number) {}

  // greet メソッドを実装してください
  greet(): string {
    return ''; // 挨拶文を返す
  }
}

// 使用例
const user = new User('Taro', 25);
console.log(user.greet()); // "こんにちは、Taroです。年齢は25歳です。"
```
