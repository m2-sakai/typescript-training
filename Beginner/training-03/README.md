# 課題 3: Enums で値を管理しよう

## 目的

Enums を使って定数をグループ化する方法を学びます。

## 指示

1. 以下のコードに適切な Enum を導入してください。
2. 型エラーが出ないように修正してください。

### 問題

以下のコードを完成させてください。

```typescript
// 支払いステータスを表す文字列のUnion型をEnum型に変換してください
enum PaymentStatus /* Enumをここに記述 */ {}
// "Pending", "Completed", "Failed" をEnumの値として設定してください

// Enum型 `PaymentStatus` を使用して関数を作成してください
function getPaymentMessage(status: PaymentStatus): string {
  if (status === PaymentStatus.Pending) {
    return '支払いが保留中です。';
  } else if (status === PaymentStatus.Completed) {
    return '支払いが完了しました！';
  } else if (status === PaymentStatus.Failed) {
    return '支払いが失敗しました。';
  }
  return '未知のステータスです。';
}
```
