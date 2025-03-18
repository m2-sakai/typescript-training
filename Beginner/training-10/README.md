# 課題 10: 型とインデックスシグネチャ

## 目的

TypeScript の**インデックスシグネチャ**の使い方を学びます。

## 指示

1. インデックスシグネチャを使った型 `KeyValue` を作成してください。
   - キーは文字列型
   - 値の型は任意の型
2. 関数内で `KeyValue` 型を使い、キーと値のペアを 1 つずつ表示する処理を作成してください。

### 問題

以下のコードを完成させてください。

- ファイル: `question.ts`

```typescript
// インデックスシグネチャを使った型 KeyValue を作成してください。
type KeyValue /* 型注釈をここに記述 */;

// KeyValue 型を使用して、受け取ったデータのキーと値を表示する関数を作成してください。
function displayKeyValue(data /* 型注釈をここに記述 */): void {
    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
    }
}

// 使用例
const myData = { name: "Taro", age: 30, isAdmin: true };
displayKeyValue(myData);
```
