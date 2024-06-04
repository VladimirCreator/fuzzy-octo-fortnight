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
import { importProvidersFrom, ApplicationConfig } from "@angular/core"
import { provideHttpClient, withFetch, HttpClient } from "@angular/common/http"
import { provideRouter, withComponentInputBinding } from "@angular/router"
import { provideClientHydration } from "@angular/platform-browser"
import { provideAnimations } from "@angular/platform-browser/animations"

// MARK: Taiga UI
import { TuiRootModule /* Required module. */ } from "@taiga-ui/core"

// MARK: ngx-markdown
import { provideMarkdown } from "ngx-markdown"

// #endregion

// #region -Vladimir’s Library

import { routes } from "./app.routes"
import { APPLICATION_CONFIGURATION } from "./token/configuration.token"
import { APPLICATION_RESOURCES } from "./token/resources.token"

// #endregion

// MARK: -Configuration
export const configuration: ApplicationConfig = {
	providers: [provideHttpClient(withFetch()), provideRouter(routes, withComponentInputBinding()), provideClientHydration(), provideAnimations(), importProvidersFrom(TuiRootModule), provideMarkdown({ loader: HttpClient }), { provide: APPLICATION_CONFIGURATION, useValue: JSON.parse(process.env["ESB_CONFIGURATION"]!) }, { provide: APPLICATION_RESOURCES, useValue: JSON.parse(process.env["ESB_ATTACHMENTS"]!) }]
}
