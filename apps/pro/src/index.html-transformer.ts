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

// MARK: -API reference documentation
/** Replaces aOptional(n) HTML document’s title with an environment variable’s value.
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @param html - A target HTML document.
 * @returns A transformed HTML document.
 */
export default (initialHtml: string): string => {
	/** .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	const title = process.env["ESB_TITLE"]

	/** .
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	const target = /process.env\["ESB_TITLE"\]/ // /(?<=^\t?<title>).*?(?=<\/title>$)/m

	/** Заголовок документа.
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 * @example Providing a title.
	 * ```bash
	 * export ESB_TITLE=Awesome\ Title
	 * ```
	 */
	const value = title ?? "fuzzy-octo-fortnight"
	if (title) {
		console.log("ESB_TITLE is defined!")
	} else {
		console.warn(`ESB_TITLE is not defined! Using the default title: ${value}`)
	}

	const transformedHtml = initialHtml.replace(target, value)
	if (initialHtml === transformedHtml) {
		console.warn("ESB_TITLE is not used!")
	} else {
		console.log("ESB_TITLE is used!")
	}
	return transformedHtml
}
