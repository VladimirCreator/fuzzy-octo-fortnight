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

/* [ ](governance): CC-BY */

// MARK: -Configuration
export default {
	displayName: "utilities",
	preset: "../../jest.preset.js",
	setupFilesAfterEnv: ["<rootDir>/src/test-setup.ts"],
	coverageDirectory: "../../coverage/libs/utilities",
	transform: {
		"^.+\\.(ts|mjs|js|html)$": [
			"jest-preset-angular",
			{
				tsconfig: "<rootDir>/tsconfig.spec.json",
				stringifyContentPathRegex: "\\.(html|svg)$"
			}
		]
	},
	transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$)"],
	snapshotSerializers: ["jest-preset-angular/build/serializers/no-ng-attributes", "jest-preset-angular/build/serializers/ng-snapshot", "jest-preset-angular/build/serializers/html-comment"]
}
