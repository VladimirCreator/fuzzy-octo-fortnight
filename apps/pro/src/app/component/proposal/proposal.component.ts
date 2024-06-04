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
import { RouterLink, RouterLinkActive } from "@angular/router"

// MARK: Taiga UI
import {
	TuiHintModule, // Используется для отображения полного имени авторов.
	TuiLinkModule // Используется для различных ссылок.
} from "@taiga-ui/core"

import {
	TuiAvatarModule, // Используется для отображения авторов.
	TuiIslandModule, // Используется для предложений.
	TuiTagModule // Используется для отображения затронутых тем.
	//TuiLineClampModule // Используется, чтобы не отображать слишком много текста.
} from "@taiga-ui/kit"

// MARK: ngx-markdown
import { MarkdownService, MarkdownComponent } from "ngx-markdown"

// #endregion

// #region -Vladimir’s Library

// MARK: Types
import type { Proposal } from "../../types"

// #endregion

/* 6:52 AM Fri 12 Apr 2024 */
// MARK: -Public API reference documentation
/** `ProposalComponent` is responsible за отображение предложения по улучшению языка программирования.
 *
 * @author Vladimir Leonidovich
 *
 * Отображается заголовок, авторы, статус.
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example
 * ```html
 * ```
 *
 * @example
 * ```typescript
 * ```
 */
@Component(/* prettier-ignore */ {
	standalone: true,
	selector: 'app-proposal',
	templateUrl: './proposal.component.html', styleUrl: './proposal.component.less',
	imports: [
		RouterLink, RouterLinkActive,
		TuiAvatarModule,
		TuiLinkModule,
		TuiIslandModule,
		TuiTagModule,
		TuiHintModule,
		//TuiLineClampModule,
		MarkdownComponent
	]
})
export class ProposalComponent {
	// #region Properties

	readonly #markdown = inject(MarkdownService)

	/** `proposal` .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 * @example Providing a proposal.
	 * ```html
	 * <app-proposal proposal="{ id: 1, name: 'Allow (most) keywords as argument labels', authors: ['Doug Gregor'], markdown: '# ...', isStarred: false }" />
	 * ```
	 */
	@Input()
	public proposal!: Proposal

	// #endregion

	// #region Getters & Setters

	// #endregion

	// #region Methods

	// #endregion
}
