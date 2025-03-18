// Userクラスを作成してください
class User {
  // クラスのプロパティとコンストラクタを実装してください
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // greet メソッドを実装してください
  greet(): string {
    return `こんにちは、${this.name}です。年齢${this.age}歳です。`; // 挨拶文を返す
  }
}

// 使用例
const user = new User('Taro', 25);
console.log(user.greet()); // "こんにちは、Taroです。年齢は25歳です。"
