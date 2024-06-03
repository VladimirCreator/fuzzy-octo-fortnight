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

// MARK: -Public API reference documentation
/** Возвращает то же самое значение, которое было передано функции с тем же самым типом, но уже опицонального.
 *
 * @author Vladimir Leonidovich
 *
 * @typeParam T - `T` является типом передаваемого выражения.
 * @param expression - Выражение любого типа.
 * @returns Значение того же типа, что и выражение, но опицонального.
 *
 * @version 0.1.0
 * @since 0.1.0
 * @public
 * @deprecated
 *
 * @example
 * ```typescript
 * const number = 0 // typeof number === 'number'
 * const maybeNumber = optional(0) // typeof maybeNumber === 'number|undefined'
 * ```
 */
export function optional<T>(expression: Readonly<T>): Readonly<T | undefined> {
	return expression
}
