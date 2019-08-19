/** @module zahl */

import originalPluralize from "pluralize"

/**
 * @param {*} count
 * @return {number}
 */
export const resolveCount = count => {
  if (typeof count === "number") {
    return count
  }
  if (typeof count?.length === "number") {
    return count.length
  }
  if (typeof count === "object") {
    return Object.keys(count).length
  }
  const convertedNumber = Number(count)
  if (Number.isNaN(convertedNumber)) {
    return 0
  } else {
    return convertedNumber
  }
}

const zahl = (count, word) => {
  const resolvedCount = resolveCount(count)
  const pluralized = resolvedCount === 1 ? zahl.singular(word) : zahl.plural(word)
  return `${resolvedCount} ${pluralized}`
}

Object.assign(zahl, originalPluralize)
Object.setPrototypeOf(zahl, Object.getPrototypeOf(originalPluralize))

/**
 * @param {number} count
 * @param {string} word
 * @return {import("pluralize").default}
 * @example
 * import zahl from "zahl"
 * const result = zahl(3, "fresh banana")
 * result === "3 fresh bananas"
 */
export default zahl