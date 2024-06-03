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
import { Component, ChangeDetectionStrategy } from "@angular/core"
import { RouterOutlet } from "@angular/router"

// MARK: Taiga UI
import {
	TuiRootModule, // Required module.
	TuiAlertModule // These 2 modules are required to display the notification. @see root.component.ts
} from "@taiga-ui/core"

// #endregion

// #region -Vladimir’s Library

import { dependency } from "utilities"

// MARK: Components
import { HeaderComponent, FooterComponent } from "./component"

// #endregion

/** .
 *
 * @author Vladimir Leonidovich
 *
 * @packageDescription
 */

// MARK: -Public API reference documentation
/** .
 *
 * @author Vladimir Leonidovich
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
	selector: 'app-root',
	templateUrl: './app.component.html', styleUrl: './app.component.less',
	imports: [
		RouterOutlet,
		TuiRootModule, TuiAlertModule,
		HeaderComponent, FooterComponent
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationComponent {
	// #region Properties
	// #endregion
	// #region Getters & Setters
	// #endregion
	// #region Constructors
	// #endregion
	// #region Methods
	// #endregion
}
