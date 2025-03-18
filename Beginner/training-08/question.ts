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