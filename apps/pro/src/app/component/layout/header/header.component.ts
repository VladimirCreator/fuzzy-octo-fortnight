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
import { RouterLink, RouterLinkActive } from "@angular/router"

// MARK: Taiga UI
import { TuiButtonModule } from "@taiga-ui/core"

import {
	TuiActiveZoneModule // Используется для того, чтобы закрывать панель управления, когда происходит клик вне панели управления.
} from "@taiga-ui/cdk"

import {
	TuiAvatarModule, // Используется для отображения изображения пользователя.
	TuiItemsWithMoreModule // Используется для того, чтобы скрыть слишком большое количество ссылок на мобильных устройствах.
} from "@taiga-ui/kit"

import {
	TuiSidebarModule // Используется для панели управления.
} from "@taiga-ui/addon-mobile"

// #endregion

// #region -Vladimir’s Library

import { DashboardComponent } from "../../dashboard/dashboard.component"
import { APPLICATION_CONFIGURATION } from "../../../token/configuration.token"

// #endregion

// MARK: -Public API reference documentation
/** `HeaderComponent` is .
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example .
 * ```html
 * <app-header />
 * ```
 */
@Component(/* prettier-ignore */ {
	standalone: true,
	selector: 'app-header',
	templateUrl: './header.component.html', styleUrl: './header.component.less',
	imports: [
		RouterLink, RouterLinkActive,
		TuiButtonModule,
		TuiAvatarModule,
		TuiItemsWithMoreModule,
		TuiSidebarModule, TuiActiveZoneModule,
		DashboardComponent
	]
})
export class HeaderComponent {
	// #region Properties

	readonly #configuration = inject(APPLICATION_CONFIGURATION)

	/**
	 * @see revealDashboard
	 */
	public isDashboardRevealed = false

	// #endregion

	// #region Getters & Setters

	/**
	 * @example GitHub.
	 * <a>https://github.com/VladimirCreator/fuzzy-octo-fortnight/</a>
	 */
	public get repositoryUrl(): string {
		return this.#configuration.repositoryUrl
	}

	/**
	 * @example GitHub.
	 * <a>https://avatars.githubusercontent.com/u/49140851?v=4</a>
	 */
	public get avatarUrl(): string {
		return this.#configuration.avatarUrl
	}

	public get version(): string {
		return this.#configuration.version
	}

	// #endregion

	// #region Methods

	/** `revealDashboard` is .
	 *
	 * @remarks
	 * Изначально `revealDashboard` не принимал никаких параметров, но `tuiActiveZoneChange` требует параметр типа `boolean`.
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 * @public
	 *
	 * @param boolean - .
	 * @returns .
	 *
	 * @example
	 * ```html
	 * <app-header />
	 * ```
	 */
	public revealDashboard(boolean: boolean) {
		this.isDashboardRevealed = boolean
	}

	// #endregion
}
