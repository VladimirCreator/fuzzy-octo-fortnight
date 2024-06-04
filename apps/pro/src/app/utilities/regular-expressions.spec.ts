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

// #endregion

// MARK: -Testee
import { regularExpressions } from "./regular-expressions"

// MARK: -Test Suite
describe("regular-expressions.spec.ts", () => {
	// MARK: Setup

	// MARK: Teardown

	// MARK: Test 1
	it("are able to recognize a proposals id", () => {
		const markdown = "- Proposal: [SE-0001](0001-keywords-as-argument-labels.md)"
		const regex = regularExpressions[0]
		const match = markdown.match(regex)?.at(0) as string

		expect(match).toBe("0001")
		expect(parseInt(match)).toBe(1)
	})

	// MARK: Test 2
	it("are able to recognize a proposals name", () => {
		const markdown = "# Allow (most) keywords as argument label"
		const regex = regularExpressions.at(1)!
		const match = markdown.match(regex)?.at(0) as string

		expect(match).toBe("Allow (most) keywords as argument label")
	})

	// MARK: Test 3
	it("are able to recognize an author", () => {
		const markdown = "- Author: [Doug Gregor](https://github.com/DougGregor)"
		const regex = regularExpressions.at(2)!
		const match = markdown.match(regex)?.at(0) as string

		expect(match).toBe("Doug Gregor")
	})

	// MARK: Test 4
	xit("are able to recognize authors", () => {
		if ("".includes("0")) {
			const markdown = "- Authors: [Doug Gregor](https://github.com/DougGregor), [Dave Abrahams](https://github.com/dabrahams)"
			const regex = regularExpressions.at(2)!
			const matches = markdown.match(regex)
			const match = markdown.match(regex)?.at(0) as string

			expect(match).toBe("Doug Gregor, Dave Abrahams")
		} else {
			const markdown = "- Authors: [Doug Gregor](https://github.com/DougGregor), [Dave Abrahams](https://github.com/dabrahams)"
			const regex = regularExpressions.at(2)!
			const matches = markdown.match(regex)
			const match1 = matches?.at(0) as string
			const match2 = matches?.at(1) as string

			expect(matches!.length).toBe(2)
			expect(match1).toBe("Doug Gregor")
			expect(match2).toBe("Dave Abrahams")
		}
	})

	// MARK: Test 5
	it("are able to recognize an implemented proposal", () => {
		const markdown = "- Status: **Implemented (Swift 2.2)**"
		const regex = regularExpressions.at(3)!
		const match = markdown.match(regex)?.at(0) as string

		expect(match).toBe("Implemented")
	})

	// MARK: Test 6
	it("are able to recognize version", () => {
		const markdown = "- Status: **Implemented (Swift 2.2)**"
		const regex = regularExpressions.at(4)!
		const match = markdown.match(regex)?.at(0) as string

		expect(match).toBe("2.2")
	})

	// MARK: Test 7
	it("are able to recognize even if there is a lot of lines", () => {
		const markdown = "- Author: [Doug Gregor](https://github.com/DougGregor)\n* Status: **Implemented (Swift 2.2)**"
		const regex = regularExpressions.at(4)!
		const match = markdown.match(regex)?.at(0) as string

		expect(match).toBe("2.2")
	})
})
