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
import { InjectionToken } from "@angular/core"

// #endregion

// MARK: -Public API reference documentation
/** `` is responsible .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example Injecting your resources.
 * ```typescript
 * import { Inject } from ''
 *
 * import { InjectionToken } from ''
 * import type { ApplicationResources } from ''
 *
 * @Inject(InjectionToken) private readonly configuration: ApplicationResources
 * ```
 *
 * @example Consuming injected configuration.
 * ```typescript
 * import { Inject } from ''
 *
 * import { InjectionToken } from ''
 * import type { ApplicationResources } from ''
 *
 * @Inject(InjectionToken) private readonly configuration: ApplicationResources
 * ```
 *
 * @example
 * ```json
 * {
 * 	"name": "CHANGELOG.md",
 * 	"url": https://raw.githubusercontent.com/vladimircreator/fuzzy-octo-fortnight/master/CHANGELOG.md'
 * },mas
 * {
 * 	"name": "CHRONICLES.md",
 * 	"url": https://raw.githubusercontent.com/vladimircreator/fuzzy-octo-fortnight/master/CHRONICLES.md'
 * },
 * {
 * 	"name": "TODO.md",
 * 	"url": https://raw.githubusercontent.com/vladimircreator/fuzzy-octo-fortnight/master/TODO.md'
 * }
 * ```
 */
export const APPLICATION_RESOURCES = new InjectionToken<ApplicationResources>("application.resources")

// MARK: -API reference documentation
/** A resource is a file that is shared .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 */
type ApplicationResource = {
	/** `` is responsible .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	name: string

	/** `` is responsible .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	url: string
}

// MARK: -API reference documentation
/** `` is responsible .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export type ApplicationResources = Readonly<Array<Readonly<ApplicationResource>>> // [ ](refactor): I will rename the type as ApplicationAttachments
