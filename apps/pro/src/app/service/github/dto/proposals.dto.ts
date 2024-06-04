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

// MARK: zod
import { z } from "zod"

// #endregion

// MARK: -Public API reference documentation
/** .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @privateRemarks
 * I created 8:20 PM Mon 22 Apr 2024.
 *
 * @privateRemarks
 * I am not sure if the following type is a data tranfer object.
 *
 * @example .
 * ```typescript
 *
 * ```
 */
const schema = z.array(
	z
		.object({
			/** `name` .
			 *
			 * @author Vladimir Leonidovich
			 *
			 * @version 0.1.0
			 * @since 0.1.0
			 */
			name: z.string(),

			/** `size` indicates how many bytes a file occupies.
			 *
			 * @author Vladimir Leonidovich
			 *
			 * @version 0.1.0
			 * @since 0.1.0
			 */
			size: z.number(),

			/** text/plain
			 *
			 * @author Vladimir Leonidovich
			 *
			 * @version 0.1.0
			 * @since 0.1.0
			 */
			download_url: z.string().url()
		})
		.passthrough()
		.readonly()
)

// MARK: -Public API reference documentation
/** .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @privateRemarks
 * I created 8:20 PM Mon 22 Apr 2024.
 *
 * @privateRemarks
 * I am not sure if the following type is a data tranfer object.
 *
 * @example .
 * ```typescript
 *
 * ```
 */
export const schemaSequence = schema.readonly()

// MARK: -Public API reference documentation
/** .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @privateRemarks
 * I created 8:20 PM Mon 22 Apr 2024.
 *
 * @privateRemarks
 * I am not sure if the following type is a data tranfer object.
 *
 * @example .
 * ```typescript
 *
 * ```
 */
export type ProposalDto = z.infer<typeof schemaSequence>

// MARK: -API reference documentation
/** .
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @privateRemarks
 * I created 9:23 PM Tue 16 Apr 2024.
 *
 * @privateRemarks
 * I am not sure if the following type is a data tranfer object.
 *
 * @example .
 * ```typescript
 *
 * ```
 */
//export type ProposalsDto = z.infer<typeof schemaSequence>
