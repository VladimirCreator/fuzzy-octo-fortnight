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

// MARK: Node
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

// MARK: Lodash
import pipe from "lodash/fp/pipe"

// MARK: Express
import express from "express"

// MARK: Angular
import { APP_BASE_HREF } from "@angular/common"
import { CommonEngine } from "@angular/ssr"

// #endregion

// #region -Vladimir’s Library

import bootstrap from "./src/main.server"

// #endregion

/** .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @returns .
 *
 * @privateRemarks
 * Actually, I am not the author of the function :)
 */
export function app() {
	const server = express()
	const serverDistFolder = dirname(fileURLToPath(import.meta.url))
	const browserDistFolder = resolve(serverDistFolder, "../browser")
	const indexHtml = join(serverDistFolder, "index.server.html")

	const commonEngine = new CommonEngine()

	server.set("view engine", "html")
	server.set("views", browserDistFolder)

	server.get("*.*", express.static(browserDistFolder, { maxAge: "1y" }))
	server.get("*", async (request, response, next) => {
		const { protocol, originalUrl, baseUrl, headers } = request

		const html = await commonEngine
			.render({
				// [ ](refactor): Extract a type of the function’s first parameter and create an object with options.
				// ```typescript
				// const html = await commonEngine.render(options).catch(next)
				// ```
				bootstrap,
				documentFilePath: indexHtml,
				url: `${protocol}://${headers.host}${originalUrl}`,
				publicPath: browserDistFolder,
				providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }]
			})
			.catch(next)

		response.send(html)
	})

	return server
}

/** .
 *
 * @author Vladimir Leonidovich
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @param application - .
 * @returns The function does not return.
 *
 * @privateRemarks
 * Actually, I am not the author of the function. :)
 *
 * > **Credits**
 * > Angular.
 */
function run(application: Record<any, any> /* [ ](refactor): the type should be improved */): void {
	const port = process.env["PORT"] ?? "4000"

	const handleStart = (): void => {
		console.log(`Node Express server is listening on http://localhost:${port}`)
	}

	application["listen"](port, handleStart)
}

// MARK: -Script
pipe(app, run)()
