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

/** .
 *
 * @author Vladimir Leonidovich
 * @version 0.1.0
 * @since 0.1.0
 *
 * @privateRemarks
 * I created the type at 6:02 PM on June 3rd 2024.
 */
type Type = {
	/** `name`.
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	// MARK:- `name`
	name: string

	/** `starredProposal`.
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	// MARK:- `starredProposals`
	starredProposals: number[]
}

// MARK: -Public API reference documentation
/** `User` type models . 1:16 AM Sun 14 Apr 2024
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example
 * ```typescript
 * const * = {
 * 	name: '',
 * 	starredProposal: [
 * 		0
 * 	]
 * } as User
 * ```
 */
// MARK: `User`
export type User = Readonly<Type>
