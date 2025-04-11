export function getEffectivePrice({
  discount,
  price,
}: {
  discount: number;
  price: number;
}): number {
  return parseFloat((((100 - discount) / 100) * price).toFixed(2));
}
