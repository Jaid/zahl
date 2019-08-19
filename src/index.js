/** @module zahl */

import originalPluralize from "pluralize"

const zahl = (word, count) => {
  const pluralized = count === 1 ? zahl.singular(word) : zahl.plural(word)
  return `${count} ${pluralized}`
}

Object.assign(zahl, originalPluralize)
Object.setPrototypeOf(zahl, Object.getPrototypeOf(originalPluralize))

/**
 * @function
 * @param {string} word
 * @param {number} count
 * @returns {import("pluralize").default}
 * @example
 * import zahl from "zahl"
 * const result = zahl("Banana", 3)
 * result === "3 Bananas"
 */
export default zahl