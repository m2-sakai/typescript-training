// インデックスシグネチャを使った型 KeyValue を作成してください。
type KeyValue = {
  [key: string]: string | number | boolean;
};

// KeyValue 型を使用して、受け取ったデータのキーと値を表示する関数を作成してください。
function displayKeyValue(data: KeyValue): void {
  for (const key in data) {
    console.log(`${key}: ${data[key]}`);
  }
}

// 使用例
const myData = { name: 'Taro', age: 30, isAdmin: true };
displayKeyValue(myData);
