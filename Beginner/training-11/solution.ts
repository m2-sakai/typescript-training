// Union型を使って、文字列または数値を許容する型を定義してください
type StringOrNumber = string | number;

// Intersection型を使って、名前と年齢を持つ Person 型を定義してください
type Person = { name: string } & { age: number };

// 以下の引数と戻り値の型を適切に設定してください
function describePerson(person: Person): string {
  return `${person.name}は${person.age}歳です。`;
}

// 使用例
const john = { name: 'John', age: 25 };
console.log(describePerson(john)); // "Johnは25歳です。"
