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

// MARK: -Testee
import { property as createO } from "./idonotknowhowtocallafunction-1"

// MARK: -Test Suite
xdescribe("idonotknowhowtocallafunction-1.spec.ts", () => {
	// MARK: Setup

	// MARK: Teardown

	// MARK: Test 1
	it("should return a tuple that contains a string and a string", () => {
		// @ts-expect-error Not yet implemented!
		const wrapper = createO("property")(() => "value")
		const property = wrapper.at(0)!
		const value = wrapper.at(1)!

		expect(property).toBe("property")
		expect(value).toBe("value")
	})

	// MARK: Test 2
	it("should return a tuple that contains a string and a number", () => {
		// @ts-expect-error Not yet implemented!
		const wrapper = createO("number")(parseInt)
		const property = wrapper.at(0)
		const value = wrapper.at(1)

		expect(property).toBe("number")
		expect(value).toBe(0)
	})
})
