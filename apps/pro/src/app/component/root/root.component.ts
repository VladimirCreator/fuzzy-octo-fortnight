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
import {
	Component,
	OnInit, // `OnInit` is used to display a notification, что артефакт не имеет бэкенд! I deploy it to GitHub Pages.
	inject,
	ViewChild,
	TemplateRef, // `ViewChild` и `TemplateRef` обеспечивают отображения notification.
	ChangeDetectionStrategy
} from "@angular/core"

import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms" // Используется для того, чтобы отфильтровать предложения по улучшению по определённому предмету обсуждения.

import { RouterLink, RouterLinkActive } from "@angular/router"

// MARK: Taiga UI
import { TuiAlertContext } from "@taiga-ui/cdk"
import {
	TuiRootModule,
	TuiAlertService,
	TuiAlertOptions, // Используется для напоминания того, что у артефакта нет бэкенд-приложения.
	// .
	TuiButtonModule,
	// Используется для хлебных крошек.
	TuiLinkModule
	// Используется для напоминания того, что у артефакта нет бэкенд-приложения.
} from "@taiga-ui/core"

import {
	TuiBreadcrumbsModule,
	TuiFilterModule,
	TuiInputModule // Используется для поиска предложения.
} from "@taiga-ui/kit"

// #endregion

// #region -Vladimir’s Library

// MARK: Components
import { HeaderComponent, FooterComponent } from "../../component/layout"
import { ProposalListComponent } from "../../component/proposal-list"

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
 * <app-root />
 * ```
 */
@Component(/* prettier-ignore */ {
	standalone: true,
	selector: 'app-root',
	templateUrl: './root.component.html', styleUrl: './root.component.less',
	providers: [],
	imports: [
		RouterLink, RouterLinkActive,
		ReactiveFormsModule,
		TuiRootModule,
		TuiFilterModule,
		TuiButtonModule,
		TuiBreadcrumbsModule,
		TuiInputModule,
		TuiLinkModule,
		HeaderComponent, FooterComponent,
		ProposalListComponent
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootComponent implements OnInit {
	// #region Properties

	/** `alerts` .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	readonly #alerts = inject(TuiAlertService)

	@ViewChild("notificationTemplate", { static: true })
	public notificationTemplate!: TemplateRef<TuiAlertContext<TuiAlertOptions<unknown>>>

	/** `form` .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	public readonly form = new FormGroup({
		name: new FormControl(""),
		filters: new FormControl([""] as const)
	})

	/** `items` .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	public readonly items = ["", ""] as const

	/** `breadcrumbs` .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	public readonly breadcrumbs = [{ caption: "Swift", href: "/" }] as const

	// #endregion

	// #region Getters & Setters

	// #endregion

	// #region Methods

	/** `ngOnInit` is .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	public ngOnInit() {
		const options = {
			autoClose: false,
			label: "Режим GitHub Pages"
		} as const // [ ](refactor): provide more appropriate type for the object

		// prettier-ignore
		this.#alerts
			.open(this.notificationTemplate, options)
			.subscribe()
	}

	// #endregion
}
