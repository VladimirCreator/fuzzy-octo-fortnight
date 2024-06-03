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
import jokerge from "./index.html-transformer"

// MARK: -Test Suite
describe("index.html-transformer.spec.ts", () => {
	// MARK: Setup

	// MARK: Teardown

	// MARK: Test 1: should replace a target with value
	it("should replace HTML document’s title with an environment variable’s value", () => {
		// Arrange
		const before = "ESB_TITLE"
		const after = "It works as expected :)"
		const html = `<!doctype html><html lang="en">
	<head><meta charset="utf-8" /><base href="/" />
		<title>${before}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="icon" type="image/x-icon" href="favicon.ico" />
	</head><body><app-root></app-root></body>
</html>`

		// Act
		const transformedHtml = jokerge(html)

		// Assert
		expect(transformedHtml.includes(before)).toBeFalse()
		expect(transformedHtml.includes(after)).toBeTrue()
		expect(transformedHtml).toBe(
			`<!doctype html><html lang="en">
	<head><meta charset="utf-8" /><base href="/" />
		<title>${after}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="icon" type="image/x-icon" href="favicon.ico" />
	</head><body><app-root></app-root></body>
</html>`
		)
	})
})
