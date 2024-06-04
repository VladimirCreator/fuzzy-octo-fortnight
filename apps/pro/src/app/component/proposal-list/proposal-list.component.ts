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
import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"

// #endregion

// #region -Vladimir’s Library

// MARK: Services
import { ProposalService } from "../../service"

// MARK: Components
import { ProposalComponent } from "../proposal"

// #endregion

// MARK: -API reference documentation
/** `ProposalListComponent` is .
 *
 * @author Vladimir Leonidovich
 *
 * @privateRemark
 * 6:40 AM < Sun 14 Apr 2024
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example
 * ```html
 * <app-proposal-list />
 * ```
 */
@Component(/* prettier-ignore */ {
	standalone: true,
	selector: 'app-proposal-list',
	templateUrl: './proposal-list.component.html', styleUrl: './proposal-list.component.less',
	imports: [
		CommonModule,
		ProposalComponent
	]
})
export class ProposalListComponent {
	// #region Properties

	readonly #proposals = inject(ProposalService)

	// #endregion

	// #region Getters & Setters

	public get proposals$() {
		return this.#proposals.proposals$
	}

	// #endregion

	// #region Methods

	// #endregion
}
