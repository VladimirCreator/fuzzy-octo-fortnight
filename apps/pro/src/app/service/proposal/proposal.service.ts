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

// MARK: Core
import { Injectable, inject } from "@angular/core"

// MARK: RxJS
import {
	of,
	shareReplay, // Предложения используются в 2 местах: главный экран и панель управления. Чтобы не делать 2 запроса.
	filter,
	map,
	mergeMap,
	toArray,
	concatAll
} from "rxjs"

// #endregion

// #region -Vladimir’s Library

// MARK: Services
import { GitHubService } from "../github/github.service"
import { UserService } from "../user/user.service"
import { ProposalExtractorService } from "../proposal-extractor/proposal-extractor.service"

// MARK: Interfaces
import { IProposalService } from "./proposal.service.interface"

// MARK: Types
import type { Proposal } from "../../types/proposal"

// #endregion

// MARK: -Public API reference documentation
/** `ProposalService` is responsible for fetching proposals.
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example a()
 * ```typescript
 * import { Component, OnInit } from '@angular/core'
 *
 * import { ProposalService } from 'proposal.service'
 *
 * @Component(/* prettier-ignore{
 * 	standalone: true,
 * 	selector: 'app-proposal-list',
 * 	templateUrl: './proposal-list.component.html',
 * 	styleUrl: './proposal-list.component.scss',
 * 	imports: []
 * })
 * export class ProposalList implements OnInit {
 * 	public proposals$: Observable<unknown> = of()
 *
 * 	pulic constructor(private proposalService: ProposalService) {
 *
 * 	}
 *
 * 	public ngOnInit() {
 * 		this.proposals$ = this.proposalService.a()
 * 	}
 * }
 * ```
 *
 * @privateRemarks I created it at 6:27 AM on Fri 12 Apr 2024.
 * @privateRemarks Моя задумка такова, что каждое предложение должно появляться по мере ответа от источника.
 */
@Injectable({
	providedIn: "root"
})
export class ProposalService implements IProposalService {
	// #region Properties

	/** This instance is responsible for .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 * @example a()
	 * ```typescript
	 * ```
	 */
	readonly #github = inject(GitHubService)

	/** `` is responsible .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 * @example a()
	 * ```typescript
	 * ```
	 */
	readonly #users = inject(UserService)

	/** `` is responsible .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 * @example a()
	 * ```typescript
	 * ```
	 */
	readonly #extractor = inject(ProposalExtractorService)

	// #endregion

	// #region Getters & Setters

	/** `` is responsible .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 * @example a()
	 * ```typescript
	 * ```
	 *
	 * @privateRemarks
	 *
	 */
	#data = undefined
	public get proposals$() {
		return this.#github.proposals$.pipe(
			concatAll(),
			mergeMap(proposal => this.#github.contents(proposal.download_url)),
			map(this.#extractor.extract),
			toArray()
		)
	}

	/** `` is responsible for .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 * @example a()
	 * ```typescript
	 * ```
	 */
	public get starred$() {
		const { user } = this.#users
		if (!user) {
			return of()
		}
		return this.proposals$.pipe(
			concatAll(),
			// prettier-ignore
			filter(proposal => (user.starredProposals as readonly number[]/* [ ](refactor): the assertion is a crutch here. there is a more elegant way to solve the type error :'( */).includes(proposal.id)),
			toArray()
		)
	}

	// #endregion
}
