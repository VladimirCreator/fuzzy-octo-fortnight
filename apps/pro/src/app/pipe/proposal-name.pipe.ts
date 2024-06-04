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
import { Pipe, PipeTransform } from "@angular/core"

// MARK: -Public API reference documentation
/** Задача `ProposalNamePipe` заключается в том, чтобы превратить название файла в человекочитаемое название.
 *
 * @author Vladimir Leonidovich
 * @deprecated
 *
 * @version 0.1.0
 * @since 0.1.0
 */
// MARK: -`ProposalNamePipe`
@Pipe({
	standalone: true,
	name: "proposalName"
})
export class ProposalNamePipe implements PipeTransform {
	// #region Methods

	// MARK: -Public API reference documentation
	/** `` .
	 *
	 * @author Vladimir Leonidovich
	 * @deprecated
	 *
	 * @param value .
	 * @param args .
	 * @returns .
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	public transform(value: string, ...args: unknown[]) {
		const words = value.split("-")

		if (args.length === 1) {
			const id = words.shift()!
			const transformedValue = (args.at(0) as string).split("-").join(" ")

			return `SE-${id} ${transformedValue}`
		}

		const transformedValue = words.join(" ")
		return `SE-${transformedValue}`
	}
}
