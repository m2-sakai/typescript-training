// 1. ユーザーの名前と年齢のタプル型を作成してください
const userData: [string, number] = ['Taro', 30];

// 2. 引数で受け取ったタプル型を整形して文字列を返す関数を作成してください
function formatUserData(user: [string, number]): string {
  return `${user[0]}は${user[1]}歳です。`;
}

// 使用例
console.log(formatUserData(userData)); // "Taroは30歳です。"
