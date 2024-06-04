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

// MARK: Angular
import { Injectable, inject } from "@angular/core"
import { HttpClient } from "@angular/common/http"

// #endregion

// #region -Vladimir’s Library

// MARK: Tokens
import { APPLICATION_CONFIGURATION } from "../../token/configuration.token"

// MARK: Services
import { IGitHubService } from "./github.service.interface"

// MARK: ...
import type { ProposalDto } from "./dto/proposals.dto"

// #endregion

// MARK: -Public API reference documentation
/** `GitHubService` is responsible .
 *
 * @remarks
 * `GitHubService` depends on `HttpClient` and `APPLICATION_CONFIGURATION`.
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 * @public
 *
 * @example
 * ```typescript
 *
 * ```
 */
@Injectable({ providedIn: "root" })
export class GitHubService implements IGitHubService {
	// #region Properties

	/** `#http` is responsible .
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 * @internal
	 *
	 * @example .
	 * ```typescript
	 * this.#http.get<>()
	 * ```
	 */
	readonly #http = inject(HttpClient)

	/** `a` is responsible .
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 * @internal
	 *
	 * @example .
	 * ```typescript
	 * this.http.get<>()
	 * ```
	 */
	readonly #configuration = inject(APPLICATION_CONFIGURATION)

	// #endregion

	// #region Getters & Setters

	/** `contents$` is responsible .
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 * @public
	 *
	 * @privateRemarks
	 * `this.#http` возвращает `Observable<Response[]>`, но проблема в том, что мне требуется `Observable<Response>`, поэтому я делаю некоторые преобразования.
	 * Я решил использовать `mergeAll`, а не `concatAll`, потому что `concatAll` просто вызывает `mergeAll`.
	 * Возможно, что есть более элегантный способ сделать это, но пока так.
	 *
	 * @example .
	 * ```html
	 * < />
	 * ```
	 *
	 * @example .
	 * ```typescript
	 * const
	 * ```
	 */
	public get proposals$() {
		const { api } = this.#configuration
		return this.#http.get<ProposalDto>(`${api}/proposals`)
	}

	// #endregion

	// #region Methods

	/** `` is responsible .
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 * @public
	 *
	 * @param url - URL of a proposal.
	 * @returns text/plain.
	 *
	 * @example .
	 * ```html
	 * < />
	 * ```
	 *
	 * @example .
	 * ```typescript
	 * const
	 * ```
	 */
	public contents(url: string) {
		return this.#http.get(url, { responseType: "text" })
	}

	// #endregion
}
