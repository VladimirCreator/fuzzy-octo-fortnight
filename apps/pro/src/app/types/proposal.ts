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

// #region -Vladimir’s Library

import type { Version } from "./version"
import type { Topic } from "./topic"

// #endregion

// MARK: -API reference documentation
/** `VladimirAttachesAdditionalProperties` type models additional properties of a proposal.
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 * @internal
 *
 * @example
 * ```typescript
 * const proposal: Proposal = {
 * 	topics: [
 * 		'The Swift Package Manager'
 * 	]
 * }
 * ```
 *
 * @privateRemarks I created it at 7:09 AM on Sun Apr 21 2024.
 */
type RequiredProperties = {
	/** `Version` type models version of the Swift programming language.
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	id: number

	/** `name`.
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	name: string

	/** `authors` type models version of the Swift programming language.
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	authors: string[]

	/** `0` Whether a proposal has one of the following .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	"0": "activeReview" | "awaitingReview" | "scheduledForReview" | "accepted" | "implemented" | "previewing" | "returnedForRevision" | "rejected" | "withdrawn"

	/** `markdown` .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	markdown: string
}

// MARK: -API reference documentation
/** `VladimirAttachesAdditionalProperties` type models additional properties of a proposal.
 *
 * @author Vladimir Leonidovich
 *
 * @privateRemarks
 * at 7:08 AM on Sun Apr 21 2024.
 *
 * @version 0.1.0
 * @since 0.1.0
 * @internal
 *
 * @example Instantiate an object of Proposal class.
 * ```typescript
 * const proposal: Proposal = {
 * 	topics: [
 * 		'The Swift Package Manager'
 * 	]
 * }
 * ```
 *
 */
type OptionalProperties = {
	/** `bugs` .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	bugs: string[]

	/** `implementation` .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	implementation: unknown

	/** `reviewManager` .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	reviewManager: unknown

	/** `decisionNotes` .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	decisionNotes: unknown

	/** `previousRevision` .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	previousRevision: unknown
}

// MARK: -API reference documentation
/** `VladimirAttachesAdditionalProperties` type models additional properties of a proposal.
 *
 * @version 0.1.0
 * @since 0.1.0
 * @internal
 *
 * @example
 * ```typescript
 * const proposal: Proposal = {
 * 	topics: [
 * 		'The Swift Package Manager'
 * 	]
 * }
 * ```
 *
 * @privateRemarks I created it at 1:13 AM on Sat Apr thirteenth 2024.
 */
type VladimirAttachesAdditionalProperties = {
	/** Whether a proposal is starred or not.
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	isStarred: boolean

	/** `topics` .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	topics: Topic[]

	/** Свйоство делате предположение что
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	lastModified: string
}

// MARK: -Public API reference documentation
/** `Proposal` type models a proposal.
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 * @public
 *
 * @example
 * ```typescript
 * const proposal: Proposal = {
 * 	id: '91c71864d9e9f9115117026975334fb31cbedab595af2cb140ed34c3f088da16'
 * 	isStarred: false
 * 	authors: [
 * 		'Tim Cook'
 * 	]
 *
 * 	undefined:
 * }
 * ```
 */
export type Proposal = /* prettier-ignore */ Readonly<
	RequiredProperties &
	Partial<OptionalProperties & VladimirAttachesAdditionalProperties>
>
