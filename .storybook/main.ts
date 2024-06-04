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

/* [ ]: CC-BY- */

// #region -Dependencies

// MARK: Storybook
import type { StorybookConfig } from "@storybook/angular"

// #endregion

// MARK: -Configuration
export default /* prettier-ignore */ {
	stories: [
	],
	framework: {
		name: "@storybook/angular",
		options: {}
	},
	docs: {
		autodocs: "tag",
		defaultName: "README"
	},
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-links'
	]
} as const satisfies StorybookConfig
