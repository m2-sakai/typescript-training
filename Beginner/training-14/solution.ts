// 動物の基本的な特性を定義する Animal インターフェースを作成してください
interface Animal {
  name: string;
  speak(): string;
}

// Animal インターフェースを実装した Dog クラスを作成してください
class Dog implements Animal {
  name: string;
  // コンストラクタを追加してください
  constructor(name: string) {
    this.name = name;
  }

  // メソッドを実装してください
  speak(): string {
    return 'ワンワン'; // 犬が「ワンワン」と話す
  }
}

// 使用例
const dog = new Dog('Pochi');
console.log(dog.name); // "Pochi"
console.log(dog.speak()); // "ワンワン"
