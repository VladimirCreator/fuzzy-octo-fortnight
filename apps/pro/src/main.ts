/// <reference types='@angular/localize' />

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

// #region -Dependences

// MARK: Angular
import { bootstrapApplication } from "@angular/platform-browser"

// #endregion

// #region -Vladimir’s Library

// MARK: Configuration
import { configuration } from "./app/app.configuration"

// MARK: Components
import { ApplicationComponent } from "./app/app.component"

// #endregion

// MARK: -...
bootstrapApplication(ApplicationComponent, configuration).catch(console.error)
