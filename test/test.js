import * as path from 'forward-slash-path'

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: zahl} = indexModule

it("should run", () => {
  expect(zahl(3, "Banana")).toBe("3 Bananas")
  expect(zahl(1, "Banana")).toBe("1 Banana")
  expect(zahl(["a", "b"], "car")).toBe("2 cars")
  expect(zahl({
    a: 1,
    b: 2,
  }, "entry")).toBe("2 entries")
})