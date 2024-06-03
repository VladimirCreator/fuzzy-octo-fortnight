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

// MARK: -API reference documentation
/** `topics`.
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const topics = [
	"The Swift Package Manager",
	"Tuples", // 1:47 AM Sun 14 Apr 2024
	"Control Flow", // 1:49 AM Sun 14 Apr 2024
	"Generics",
	"Macros",
	"Concurrency", // 1:46 AM Sun 14 Apr 2024
	"Access Modifiers",
	"Modules", // 1:57 AM Sun 14 Apr 2024
	"Actors", // 1:58 AM Sun 14 Apr 2024
	"Result Builders", // 1:58 AM Sun 14 Apr 2024
	"Enums", // 1:58 AM Sun 14 Apr 2024
	"Closures", // 1:58 AM Sun 14 Apr 2024
	"Standard Library", // 1:59 AM Sun 14 Apr 2024
	"Property Wrappers", // 1:59 AM Sun 14 Apr 2024

	"Package Registry", // 1:48 AM Sun 14 Apr 2024

	"Developer Experience", // 1:47 AM Sun 14 Apr 2024

	"Regular Expressions" // 1:57 AM Sun 14 Apr 2024
] as const

// MARK: -API reference documentation
/** `Topic` type represents a model of .
 *
 * @author Vla
 *
 * Я экспортирую этот тип только, чтобы сделать другой тип. Этот тип не является частью публичного API.
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example
 * ```typescript
 * const topic: Topic = ''
 * ```
 */
// MARK: `Topic`
export type Topic = (typeof topics)[number]
