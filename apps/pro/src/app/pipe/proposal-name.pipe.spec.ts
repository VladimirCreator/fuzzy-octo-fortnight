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
import { TestBed } from "@angular/core/testing"

// #endregion

// MARK: -Testee
import { ProposalNamePipe } from "./proposal-name.pipe"

// MARK: -Test Suite
xdescribe("proposal-name.pipe.spec.ts", () => {
	/** Testee.
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	let pipe: ProposalNamePipe

	// MARK: Setup
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ProposalNamePipe]
		})

		pipe = TestBed.inject(ProposalNamePipe)
	})

	// MARK: Teardown

	// MARK: Test 1: is instantiable
	it("is instantiable", () => expect(pipe).toBeTruthy())

	// MARK: Test 2: it transforms correctly
	it("it transforms correctly", () => {
		// Arrange
		const expectedValue = "SE-0001 Keywords as argument labels" // : 'SE-0001 Allow (most) keywords as argument labels'

		// Act
		const transformedValue = pipe.transform("0001-keywords-as-argument-labels")

		// Assert
		expect(transformedValue).toBe(expectedValue)
	})

	// MARK: Test 3: it transforms correctly considering its parameters
	it("it transforms correctly considering its parameters", () => {
		// Arrange
		const expectedValue = "SE-0001 Allow (most) keywords as argument labels"

		// Act
		const transformedValue = pipe.transform("0001-keywords-as-argument-labels", "allow-(most)-keywords-as-argument-labels")

		// Assert
		expect(transformedValue).toBe(expectedValue)
	})
})
