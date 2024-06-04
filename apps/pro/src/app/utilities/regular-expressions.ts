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

/*[ ]: CC-BY*/

/** .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const regularExpressions = [
	/** (0) id.
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	/(?<=^. Proposal: \[SE-)[0-9]{4}(?=\])/m,

	/** (1) Name.
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	/(?<=^# ).*(?=$)/m,

	/** (2) Authors.
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	/(?<=^. Authors?: \[).*?(?=\]\(.*\)$)/m,
	///(?<=\[).*?(?=\]\(.*?\))/g,

	/** (3) Status.
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	///(?<=^\* Status: \*\*).*?(?= \(.*\))/m,
	/(?<=^. Status: \*\*).*?(?=( \(.*\))?\*{2})/m,

	/** Version.
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	/(?<=\(Swift )[0-9]+\.[0-9]+(?=\)\*{2}$)/
] as const
