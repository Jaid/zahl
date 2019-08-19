import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: zahl} = indexModule

it("should run", () => {
  expect(zahl("Banana", 3)).toBe("3 Bananas")
  expect(zahl("Bananas", 1)).toBe("1 Banana")
  expect(zahl("Bananas")).toBe("undefined Bananas")
})