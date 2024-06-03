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

// MARK:- Core
import { Injectable } from "@angular/core"

// MARK: lodash
import toLower from "lodash/fp/toLower"
import camelCase from "lodash/fp/camelCase"
import split from "lodash/fp/split"
import { dropWhile, take } from "lodash"

// MARK:- Others
import { compose } from "lodash/fp"
import { O } from "ts-toolbelt"

// #region -Vladimir’s Library
import { IProposalExtractorService } from "./proposal-extractor.service.interface"
import { createA } from "../../utilities"
import { property } from "../../utilities/idonotknowhowtocallafunction-1"
import type { Proposal } from "../../types"

// Vladimir created the following function at 10:01 PM on Fri May third 2024.
//function a(property: string, ...unknown) {
//	return compose(createO(property), rest)
//}
//a('id', parseInt, createA(0))

export const idHandler = compose(property("id"), parseInt, createA(0))
export const nameHandler = compose(property("name"), createA(1))
export const authorHandler = compose(property("authors"), split(", "), createA(2))
export const oHandler = compose(property("0"), camelCase, toLower, createA(3))

/** .
 *
 * @privateRemarks
 * Vladimir created `handlers` array at 10:01 PM on Fri May third 2024.
 */
const handlers = [nameHandler, idHandler, authorHandler, oHandler]

// MARK: -API reference documentation
/** `` is responsible .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example .
 * ```typescript
 * import { inject } from ''
 *
 * import { UserService } from ''
 *
 * @Component(/* prettier-ignore{
 * 	providedIn: 'root'
 * })
 * export class Component {
 * 	users = inject(UserService)
 *
 *
 * }
 * ```
 *
 */
// MARK: -`ProposalExtractorService`
@Injectable({
	providedIn: "root"
})
export class ProposalExtractorService implements IProposalExtractorService {
	// #region Methods

	/** `` .
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 * {@inheritDoc IProposalExtractorService.extract}
	 *
	 * @example Instancing an instance of a Proposal class.
	 * ```typescript
	 * const = {  } satisfies Proposal
	 * ```
	 */
	public extract(markdown: string) {
		// [ ](refactor): it should be refactored
		const refactorMe = take(
			dropWhile(markdown.split("\n"), text => !text.includes("## Introduction")).reduce((a, b) => a + b + "\n", ""),
			160
		).reduce((a, b) => a + b, "")
		return handlers.reduce(
			(proposal, handle) => {
				// [ ](refactor): it should not be here
				try {
					const [property, value] = handle(markdown)
					// @ts-expect-error O.Writable should do its job but it does not for some reason.
					proposal[property] = value
				} catch (error) {
					console.warn(`error: ${error}`)
				}
				return proposal
			},
			{ markdown: `${refactorMe}...` } as O.Writable<Proposal, keyof Proposal, "deep">
		) as Proposal
	}

	// #endregion
}
