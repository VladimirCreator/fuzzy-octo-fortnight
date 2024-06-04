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

const { join } = require("path")

// #endregion

// MARK: -Configuration
module.exports = configuration => /* prettier-ignore */ {
	configuration.set({
		browsers: [
			'ChromeHeadless'
		],
		basePath: '',
		frameworks: [
			'jasmine',
			'@angular-devkit/build-angular'
		],
		plugins: [
			require('karma-jasmine'),
			require('karma-coverage'),
			require('@angular-devkit/build-angular/plugins/karma'),
			// MARK: Reporters
			require('karma-clear-screen-reporter'),
			require('karma-spec-reporter'),
			require('karma-summary-reporter'),
			require('karma-jasmine-html-reporter'),
			// MARK: Launchers
			require('karma-chrome-launcher')
		],
		client: {
			jasmine: {},
			clearContext: false
		},
		jasmineHtmlReporter: {
			suppressAll: true
		},
		coverageReporter: {
			dir: join(__dirname, './coverage'),
			subdir: '.',
			reporters: [
				{ type: 'html' },
				{ type: 'text-summary' }
			]
		},
		reporters: [
			//'progress',
			//'clear-screen',
			'spec',
			'summary',
			//'kjhtml'
		]
	})
}
