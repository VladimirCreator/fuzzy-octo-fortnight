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

// MARK: RxJS
import { Observable } from "rxjs"

// #endregion

// #region -Vladimir’s Library

import type { ProposalDto } from "./dto/proposals.dto"

// #endregion

// MARK: -Public API reference documentation
/** Данный протокол определяет .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @remarks
 * Я создал протокол `IGitHubService` чисто ради своего удобства.
 *
 * @example Fulfill protocol requi.
 * ```typescript
 * import { Injectable } from '@angular/core'
 *
 * @Injectable({
 * 	providedIn: 'root'
 * })
 * export class GitHubService implements IGitHubService {
 * 	// ...
 * }
 * ```
 *
 * @example Inject your service.
 * ```typescript
 * import { inject } from '@angular/core'
 *
 * import { GitHubService } from ''
 *
 * @Injectable({
 * 	providedIn: 'root'
 * })
 * export class YourService implements IGitHubService {
 * 	private readonly github = inject(GitHubService)
 * }
 * ```
 */
export interface IGitHubService {
	// #region Getters & Setters

	/** .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 * @returns .
	 *
	 * @example .
	 * ```typescript
	 *
	 * ```
	 */
	get proposals$(): Observable<ProposalDto>

	// #endregion

	// #region Methods

	/** .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 * @param url .
	 * @returns .
	 *
	 * @example .
	 * ```typescript
	 * ```
	 */
	contents(url: string): Observable<string>

	// #endregion
}
