# 課題 14: クラスとインターフェースを組み合わせる

## 目的

TypeScript の**インターフェース**と**クラス**を組み合わせて使用する方法を学びます。

## 指示

1. 動物の基本的な特性を定義する `Animal` インターフェースを作成してください。
   - プロパティ: `name` (文字列型)
   - メソッド: `speak()` - 動物が何かを話す
2. `Animal` インターフェースを実装した `Dog` クラスを作成してください。
   - プロパティ: `name`（動物の名前）
   - メソッド: `speak()` - 犬が「ワンワン」と話す

### 問題

以下のコードを完成させてください。

- ファイル: `question.ts`

```typescript
// 動物の基本的な特性を定義する Animal インターフェースを作成してください
interface Animal /* 型注釈をここに記述 */ {}

// Animal インターフェースを実装した Dog クラスを作成してください
class Dog /* 型注釈をここに記述 */ {
  // コンストラクタを追加してください
  constructor(name: string) {}

  // メソッドを実装してください
  speak(): string {
    return ''; // 犬が「ワンワン」と話す
  }
}

// 使用例
const dog = new Dog('Pochi');
console.log(dog.name); // "Pochi"
console.log(dog.speak()); // "ワンワン"
```
