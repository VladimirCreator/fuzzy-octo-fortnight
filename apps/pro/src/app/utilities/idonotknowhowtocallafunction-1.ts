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
import { Any } from "ts-toolbelt"

// #region -Vladimir’s Library
import type { Proposal } from "../types"

// MARK: -...
type Property = Any.Keys<Proposal>

// MARK: -API reference documentation
/** `createO` is responsible to amend a handler.
 *
 * @author Vladimir Leonidovich
 *
 * @privateRemarks
 * Я экспортирую эту функцию только ради тестов, а значит она не является частью публичного API!
 *
 * @param property Определяет свойство объекта.
 * @returns .
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example .
 * ```typescript
 *
 * ```
 *
 */
// MARK: -`createO`
export function property(property: Property) {
	// MARK: -API reference documentation
	/** `createO` is responsible to amend a handler.
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @privateRemarks
	 * Я экспортирую эту функцию только ради тестов, а значит она не является частью публичного API!
	 *
	 * @param property Определяет свойство объекта.
	 * @returns .
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	// MARK: -``
	return <T>(value: Readonly<T>) => {
		return [property, value] as const
	}
}
