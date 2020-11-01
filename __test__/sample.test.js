function sum(a, b) {
  return a + b;
}
test('multiplication', () => {
  const a = 1;
  const b = 2;
  expect(sum(a, b)).toBe(3);
});
