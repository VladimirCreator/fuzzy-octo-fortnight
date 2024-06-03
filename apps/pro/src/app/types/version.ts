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

/** `versions` .
 */
const versions = /*prettier-ignore*/ [
	"2.2",
	"3.0", "3.0.1", "3.1",
	"4.0", "4.1", "4.2",
	"5.0", "5.1", "5.2", "5.3", "5.4", "5.5", "5.5.2", "5.6", "5.7", "5.8", "5.9", "5.9.2", "5.10",
	"6.0"
] as const

// MARK: -Public API reference documentation
/** `Version` type models version of the Swift programming language. 8:53 AM Fri 12 Apr 2024
 *
 * @author Vladimir Leonidovich
 *
 * Почему я включил именно те версии, которые включены? Всё очень просто: я зашёл на сайт с предложениями и просто просматривал все версии.
 *
 * Я экспортирую этот тип только, чтобы сделать другой тип. Этот тип не является частью публичного API.
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example
 * ```typescript
 * const swift59: Version = '5.9'
 * ```
 */
// MARK: `Version`
export type Version = (typeof versions)[number]

// MARK: `export`
export const _private = {
	versions
}
