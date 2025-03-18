# 課題 8: リテラル型を使う

## 目的

TypeScript の**リテラル型**を使い、特定の値のみを持つ型を定義する方法を学びます。

## 指示

1. 車の状態をリテラル型で表す型 `Status` を作成してください。
   - 状態の値は "new", "used", "refurbished" のみとします。
2. 関数内で `Status` 型を使用し、受け取った状態に応じたコメントを返す機能を作成してください。

### 問題

以下のコードを完成させてください。

- ファイル: `question.ts`

```typescript
// リテラル型を使用して、車の状態を表す型 Status を作成してください。
type Status /* 型注釈をここに記述 */;

// Status 型を使用して、状態に応じたコメントを返す関数を作成してください。
function commentOnCar(status /* 型注釈をここに記述 */): string {
    switch (status) {
        case "new":
            return "この車は新品です！";
        case "used":
            return "この車は中古ですが良いコンディションです。";
        case "refurbished":
            return "この車は修理されていますがまだまだ使えます。";
        default:
            return "未知の状態です。";
    }
}

// 使用例
console.log(commentOnCar("new")); // "この車は新品です！"
console.log(commentOnCar("used")); // "この車は中古ですが良いコンディションです。"
```
