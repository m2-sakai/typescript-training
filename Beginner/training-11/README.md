# 課題 11: 型の合成を学ぼう

## 目的

TypeScript の**Union 型**と**Intersection 型**を使用して型を合成する方法を学びます。

## 指示

1. Union 型を使って、文字列または数値を許容する型を作成してください。
2. Intersection 型を使って、複数の型を組み合わせた型を作成してください。

### 問題

以下のコードを完成させてください。

- ファイル: `question.ts`

```typescript
// Union型を使って、文字列または数値を許容する型を定義してください
type StringOrNumber /* 型注釈をここに記述 */;

// Intersection型を使って、名前と年齢を持つ Person 型を定義してください
type Person /* 型注釈をここに記述 */;

// 以下の引数と戻り値の型を適切に設定してください
function describePerson(person /* 型注釈をここに記述 */): string {
    return `${person.name}は${person.age}歳です。`;
}

// 使用例
const john = { name: "John", age: 25 };
console.log(describePerson(john)); // "Johnは25歳です。"
```
