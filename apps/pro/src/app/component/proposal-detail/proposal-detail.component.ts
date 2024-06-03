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
import { Component, inject, Input } from "@angular/core"

// MARK: ngx-markdown
import { MarkdownComponent } from "ngx-markdown"

// #endregion

// #region -Vladimir’s Library

// MARK: Services
import { ProposalService } from "../../service"

// #endregion

// MARK: -Public API reference documentation
/** `ProposalDetailComponent` is responsible .
 *
 * @author V
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example
 * ```html
 *
 * ```
 *
 * @example
 * ```typescript
 *
 * ```
 */
@Component(/* prettier-ignore */ {
	standalone: true,
	selector: 'app-proposal-detail',
	templateUrl: './proposal-detail.component.html', styleUrl: './proposal-detail.component.less',
	imports: [
		MarkdownComponent
	]
})
export class ProposalDetailComponent {
	// #region Properties

	readonly #s = inject(ProposalService)

	// #endregion

	// #region Getters & Setters

	@Input()
	public set name(name: string) {
		this.#s.proposals$
	}

	// #endregion

	// #region Methods

	// #endregion
}
