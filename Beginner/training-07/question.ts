// 1. 型エイリアスを定義してください
type Book /* 型注釈をここに記述 */;

// 2. Book型を引数として受け取って整形する関数を作成してください
function describeBook(book /* 型注釈をここに記述 */): string {
    return `"${book.title}"は${book.author}によって書かれ、${book.pages}ページあります。`;
}

// 使用例
const myBook = { title: "TypeScript入門", author: "John Doe", pages: 300 };
console.log(describeBook(myBook)); // "TypeScript入門はJohn Doeによって書かれ、300ページあります。"