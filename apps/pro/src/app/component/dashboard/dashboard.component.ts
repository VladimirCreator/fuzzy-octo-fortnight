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
import { Component, inject, ChangeDetectionStrategy } from "@angular/core"
import {
	CommonModule // Используется .
} from "@angular/common"

// MARK: Taiga UI
import {
	TuiButtonModule, // Используется для того, чтобы отображать предложения.
	TuiLinkModule // Используется для того, чтобы отображать API.
} from "@taiga-ui/core"

import {
	TuiAvatarModule, // Используется для того, чтобы соответствовать внешнему виду.
	TuiCarouselModule // Используется для того, чтобы отображать предложения и понравившиеся предложения.
} from "@taiga-ui/kit"

// #endregion

// #region -Vladimir’s Library

// MARK: Services
import { ProposalService, UserService } from "../../service"

// MARK: Tokens
import { APPLICATION_CONFIGURATION } from "../../token/configuration.token"

// MARK: Components
import { ProposalComponent } from "../proposal"

// #endregion

// MARK: -Public API reference documentation
/** `DashboardComponent` is a .
 *
 * @author Vla
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example
 * ```html
 * <app-dashboard />
 * ```
 *
 * @privateRemarks I created it at 6:40 AM < Sun 14 Apr 2024.
 */
@Component(/* prettier-ignore */ {
	standalone: true,
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html', styleUrl: './dashboard.component.less',
	imports: [
		CommonModule,
		TuiAvatarModule, TuiButtonModule, TuiCarouselModule, TuiLinkModule,
		ProposalComponent
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
	// #region Properties

	readonly #configuration = inject(APPLICATION_CONFIGURATION)
	readonly #proposals = inject(ProposalService)
	readonly #users = inject(UserService)

	// #endregion

	// #region Getters & Setters

	public get api() {
		return this.#configuration.api
	}

	public get starred$() {
		return this.#proposals.starred$
	}

	public get user() {
		return this.#users.user
	}

	// #endregion

	//#region Methods

	//#endregion
}
