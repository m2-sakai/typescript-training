// オプション引数を持つ関数を作成してください
function createUser(
  name: string,
  age: number,
  isAdmin: boolean = false
): string {
  return `${name} (${age}歳): 管理者: ${isAdmin ? 'はい' : 'いいえ'}`;
}

// 使用例
console.log(createUser('John', 25)); // "John (25歳): 管理者: いいえ"
console.log(createUser('Alice', 30, true)); // "Alice (30歳): 管理者: はい"
