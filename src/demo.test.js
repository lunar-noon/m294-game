const demo = function (a,b) {
  return a + b;
}

test('teste korrekte summe in demo function', () => {
expect(demo(1,2)).toBe(3)
expect(demo(10, -20)).toBe(-10)
})

test('teste etwas, was immer falsch ist', () => {
  expect(false).toBe(false)
})
