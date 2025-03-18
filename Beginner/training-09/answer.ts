// Never型を使用して、値が予期しない型の場合にエラーを投げる関数を作成してください。
function assertNever(value: string): never {
  throw new Error(`予期しない値: ${value}`);
}

// 使用例 (以下のコードを書かないとエラーになります)
assertNever('unexpected');
