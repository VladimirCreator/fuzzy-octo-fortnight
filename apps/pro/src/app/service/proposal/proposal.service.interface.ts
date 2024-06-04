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

// MARK:- RxJS
import { Observable } from "rxjs"

// #endregion

// #region -Vladimir’s Library

import type { Proposal } from "../../types/proposal"

// #endregion

/** `IProposalService` interface exists только ради моего удобство.
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 * @public
 *
 * @example Conforming to the protocol’s requirements.
 * ```typescript
 * export class Service implements IProposalService {
 *
 * }
 * ```
 *
 * @see {@link ProposalService} class for an example of implementation of the protocol’s requirements.
 */
export interface IProposalService {
	// #region Getters & Setters

	/** Get предложения по улучшению языка программирования.
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 * @public
	 *
	 * @returns Предложения по улучшению языка программирования.
	 *
	 * @example .
	 * I do not recommend .
	 *
	 * ```typescript
	 * import { of } from "rxjs"
	 *
	 * export class Service implements IProposalService {
	 * 	public get proposals$() {
	 * 		return of()
	 * 	}
	 * }
	 * ```
	 *
	 * ```html
	 * <>
	 * </>
	 * ```
	 */
	get proposals$(): Observable<Readonly<Array<Proposal>>>

	/** Get предложения по улучшению языка программирования, которые пользователь пометил как понравившиеся.
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 * @public
	 *
	 * @returns Предложения по улучшению языка программирования, которые пользователь пометил как понравившиеся.
	 *
	 * @example .
	 * ```typescript
	 * ```
	 *
	 * @example .
	 * ```html
	 * ```
	 */
	get starred$(): Observable<Readonly<Array<Proposal>>>

	// #endregion
}
