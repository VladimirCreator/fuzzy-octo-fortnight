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

// MARK:- Core
import { TestBed } from "@angular/core/testing"

// #endregion

// MARK: -Testee

// MARK:- Components
import { ApplicationComponent } from "./app.component"

// #region -Testee’s Dependencies

import { APPLICATION_CONFIGURATION } from "./token/configuration.token"

// #endregion

/// MARK: -Test Suite
xdescribe("app.component.spec.ts", () => {
	// MARK: Setup
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ApplicationComponent],
			providers: [
				{
					provide: APPLICATION_CONFIGURATION,
					useValue: {
						name: "V",
						avatarUrl: "f",
						repository: "as",
						version: "0.1.0",
						api: "a"
					}
				}
			]
		}).compileComponents()
	})

	/// MARK: Teardown

	/// MARK: Test 1
	it("is instantiable", () => {
		const fixture = TestBed.createComponent(ApplicationComponent)
		const app = fixture.componentInstance
		expect(app).toBeTruthy()
	})
})
