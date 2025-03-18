// 1. 名前（string型）と年齢（number型）を入力として受け取り、挨拶を返す関数を作成してください
function greet(
  name /* 型注釈をここに追加 */,
  age /* 型注釈をここに追加 */
) /* 戻り値の型注釈 */ {
  return `こんにちは、${name}さん！あなたは${age}歳ですね。`;
}

// 2. 値が `true` であるかを確認する関数 isTrue を作成してください
function isTrue(value /* 型注釈をここに追加 */) /* 戻り値の型注釈 */ {
  return value === true;
}
