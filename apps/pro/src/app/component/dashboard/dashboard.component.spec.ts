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

import { TestBed, ComponentFixture } from "@angular/core/testing"

// #endregion

// MARK: -Testee
import { DashboardComponent } from "./dashboard.component"

// MARK: -Test Suite
xdescribe("dashboard.component.spec.ts", () => {
	let component: DashboardComponent
	let fixture: ComponentFixture<DashboardComponent>

	// MARK: Setup
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DashboardComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(DashboardComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	// MARK: Teardown

	// MARK: Test 1: is instantitable
	it("is instantitable", () => expect(component).toBeTruthy())
})
