# 課題 7: 型エイリアスを使う

## 目的

TypeScript の**型エイリアス**を使う方法を学びます。

## 指示

1. 型エイリアスを使って、本や雑誌の情報を表す型 `Book` を作成してください。
2. 関数内でその `Book` 型を使い、情報を整形して表示する機能を作成してください。

### 問題

以下のコードを完成させてください。

- ファイル: `question.ts`

```typescript
// 1. 型エイリアスを定義してください
type Book /* 型注釈をここに記述 */;

// 2. Book型を引数として受け取って整形する関数を作成してください
function describeBook(book /* 型注釈をここに記述 */): string {
    return `"${book.title}"は${book.author}によって書かれ、${book.pages}ページあります。`;
}

// 使用例
const myBook = { title: "TypeScript入門", author: "John Doe", pages: 300 };
console.log(describeBook(myBook)); // "TypeScript入門はJohn Doeによって書かれ、300ページあります。"
```
