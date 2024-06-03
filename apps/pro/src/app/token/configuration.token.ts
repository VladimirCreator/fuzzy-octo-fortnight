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
import { InjectionToken } from "@angular/core"

// #endregion

// MARK: -API reference documentation
/** `` is responsible .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 */
type Author = {
	/** `` is responsible .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 */
	name: string

	/** `` is responsible .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 */
	avatarUrl: string
}

// MARK: -API reference documentation
/** `` is responsible .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 */
type Info = {
	/** `` is responsible .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	repositoryUrl: string

	/** `` is responsible .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	version: string // [ ](feat): it should read the latest version but itself
}

// MARK: -API reference documentation
/** `` is responsible .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @privateRemarks
 * I created this at 10:16 PM on Sat 27 Apr 2024.
 */
type Dependences = {
	/** `` is responsible .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 * @public
	 *
	 * @example
	 */
	api: string
}

// MARK: -Public API reference documentation
/** `` is responsible .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export type ApplicationConfiguration = Readonly<Author & Info & Dependences>

// MARK: -Public API reference documentation
/** `` is responsible .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 * @public
 *
 * @example Injecting your configuration.
 * ```typescript
 * import { Inject } from ''
 *
 * import { InjectionToken } from ''
 * import type { ApplicationConfiguration } from ''
 *
 * @Inject(InjectionToken) private readonly configuration: ApplicationConfiguration
 * ```
 *
 * @example Consuming injected configuration.
 * ```typescript
 * import { Inject } from ''
 *
 * import { InjectionToken } from ''
 * import type { ApplicationConfiguration } from ''
 *
 * @Inject(InjectionToken) private readonly configuration: ApplicationConfiguration
 * ```
 */
export const APPLICATION_CONFIGURATION = new InjectionToken<ApplicationConfiguration>("application.configuration")
