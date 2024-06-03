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

// MARK: -Testee

// MARK:- Services
import { UserService } from "./user.service"

// MARK: -Data
import { user } from "./user.mock"

// MARK: -Test Suite
describe("user.service.spec.ts", () => {
	let service: UserService

	// MARK: Setup
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [UserService]
		})

		service = TestBed.inject(UserService)
	})

	// MARK: Teardown

	// MARK: Test 1
	it("is instantitable", () => expect(service).toBeTruthy())

	// MARK: Test 2
	it("user should not return a user", () => {
		// Arrange
		const expectedUser = user

		// Act
		const actualUser = service.user

		// Assert
		expect(actualUser).toEqual(expectedUser)
	})

	// MARK: Test 3
	it("service should not have a user", () => {
		// Arrange

		// Act

		// Assert
		expect(service.hasUser).toBeTrue()
	})
})
