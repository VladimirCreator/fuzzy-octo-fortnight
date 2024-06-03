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
import { ApplicationConfig, mergeApplicationConfig } from "@angular/core"
import { provideServerRendering } from "@angular/platform-server"

// #endregion

// #region -Vladimir’s Library

// MARK: Configuration
import { configuration as applicationConfiguration } from "./app.configuration"

// #endregion

// MARK: -Configuration
const serverConfiguration: ApplicationConfig = {
	providers: [provideServerRendering()]
}

export const configuration = mergeApplicationConfig(applicationConfiguration, serverConfiguration)
