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
import type { Proposal } from "../../types/proposal"

// MARK: -Public API reference documentation
/** Для своего удобства.
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 * @public
 *
 * @example Conforming to the protocol’s requirements.
 * ```typescript
 * export class Service implements IProposalExtractorService {
 *
 * }
 * ```
 *
 * @see {@link ProposalExtractorService} class for an example of implementation of the protocol’s requirements.
 */
export interface IProposalExtractorService {
	/** `extract` method возвращает предложение основываясь на последовательности символов.
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @param markdown - A sequence of characters, которая contains язык разметки markdown.
	 * @returns A proposal.
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 * @public
	 *
	 * @example .
	 * ```typescript
	 *
	 * ```
	 *
	 * @see {@link Proposal} class.
	 */
	extract(markdown: string): Proposal
}
