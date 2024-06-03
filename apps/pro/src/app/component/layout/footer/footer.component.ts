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

// MARK: Taiga UI
import {
	TuiLinkModule // Используется ресурсами.
} from "@taiga-ui/core"

// #endregion

// #region -Vladimir’s Library

import { APPLICATION_CONFIGURATION } from "../../../token/configuration.token"
import { APPLICATION_RESOURCES } from "../../../token/resources.token"

// #endregion

// MARK: -Public API reference documentation
/** `FooterComponent` is .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example .
 * ```html
 * <app-footer />
 * ```
 */
@Component(/* prettier-ignore */ {
	standalone: true,
	selector: 'app-footer',
	templateUrl: './footer.component.html', styleUrl: './footer.component.less',
	imports: [
		TuiLinkModule
	]
})
export class FooterComponent {
	// #region Properties

	readonly #configuration = inject(APPLICATION_CONFIGURATION)
	readonly #resources = inject(APPLICATION_RESOURCES)

	// #endregion

	// #region Getters & Setters

	public get author() {
		return this.#configuration.name
	}

	public get resources() {
		return this.#resources
	}

	// #endregion

	// #region Methods

	// #endregion
}
