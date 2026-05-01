const { sum } = require("../../dist/controllers/home.controller")

test("expect 1 + 2 to be 3", () => {
    expect(sum(1,2)).toBe(3)
})