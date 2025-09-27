import { it, expect } from "bun:test"

import {getMainModuleDefault} from 'zeug'

const zahl = await getMainModuleDefault<typeof import('../src/index.ts')>('zahl')

it("should run", () => {
  expect(zahl(3, "Banana")).toBe("3 Bananas")
  expect(zahl(1, "ripe banana")).toBe("1 ripe banana")
  expect(zahl(["a", "b"], "car")).toBe("2 cars")
  expect(zahl({
    a: 1,
    b: 2,
  }, "entry")).toBe("2 entries")
})
