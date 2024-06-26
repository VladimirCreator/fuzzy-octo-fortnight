/* fuzzy-octo-fortnight ознакомление с предложениями по улучшению языка программирования Swift.
 * Copyright (C) 2024-present Vladimir Leonidovich
 *
 * This program is free software: you can redistribute
 * it and/or modify it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

// #region -Dependencies

// #endregion

// #region -Vladimir’s Library

import { regularExpressions } from "./regular-expressions"

// #endregion

// MARK: -Public API reference documentation
/** Функция, которая возвращает функцию.
 *
 * @author Vladimir Leonidovich
 *
 * @privateRemarks
 * Я экспооьиу только ради тестов
 *
 * @privateRemarks
 * Higher-order function
 *
 * @param regexp -
 * @returns Функция.
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example
 * The following example demonstrates a basic usage.
 * it creates a function that will check if a string has more than 0 characters and if it does then it tries to convert that string into a number.
 * it is now possible to use created function.
 * ```typescript
 * const . = logic(
 * 	line => line.length !== 0, // if a string contains more than 0 characters
 * 	line => parseInt(line)     // try to transform it into a number
 * )
 * const number = .('0')
 * console.log(number) // 0
 * console.log(typeof number) // number
 * ```
 */
export function createA(index: number) {
	const regexp = regularExpressions.at(index)!

	// MARK: -API reference documentation
	/** `` is .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @param line - description.
	 * @returns A value.
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 * @example .
	 * ```typescript
	 * const value = logic('')
	 * console.log(value) //
	 * ```
	 */
	// MARK: -`logic`
	return (markdown: string): string => {
		const matches = markdown.match(regexp)!
		// [ ](refactor): it actually should never throw!
		const match = matches.at(0)!
		if (match) {
			return match
		}
		throw new Error(markdown)
	}
}
