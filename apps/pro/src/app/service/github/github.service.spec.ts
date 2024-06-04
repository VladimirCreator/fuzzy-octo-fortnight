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

// MARK: Angular
import { TestBed } from "@angular/core/testing"
import { provideHttpClient } from "@angular/common/http"
import { provideHttpClientTesting, HttpTestingController } from "@angular/common/http/testing"

// MARK: RxJS
import { firstValueFrom } from "rxjs"

// MARK: -Testee
import { GitHubService } from "./github.service"

// #region -Vladimir’s Library

import { APPLICATION_CONFIGURATION } from "../../token/configuration.token"
import type { ApplicationConfiguration } from "../../token/configuration.token"

// #endregion

// #region -Data

import specProposals from "./proposals.mock"
import keywordsAsArgumentLabels from "!!raw-loader!../../../assets/proposals/0001-keywords-as-argument-labels.md"

// #endregion

// MARK: -Test Suite
describe("github.service.spec.ts", () => {
	/** Testee.
	 *
	 * @author Vladimir Leonidovich
	 */
	let service: GitHubService
	let configuration: ApplicationConfiguration
	let controller: HttpTestingController

	// MARK: Setup
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: /* prettier-ignore */ [
				provideHttpClient(), provideHttpClientTesting(),
				GitHubService,
				{
					provide: APPLICATION_CONFIGURATION,
					useValue: {
						author: 'Me',
						api: '/repos/apple/swift-evolution/contents/proposals/',
						version: '0.1.0'
					}
				}
			]
		})
		controller = TestBed.inject(HttpTestingController)
		service = TestBed.inject(GitHubService)
		configuration = TestBed.inject(APPLICATION_CONFIGURATION)
	})

	// MARK: Teardown
	afterEach(() => {
		controller.verify()
	})

	// MARK: Test 1: is instantitable
	it("is instantitable", () => expect(service).toBeTruthy())

	// MARK: Test 2: `proposals$` should return an array of proposals
	it("`proposals$` should return an array of proposals", async () => {
		// Arrange

		// Act
		const proposals = firstValueFrom(service.proposals$)
		const request = controller.expectOne("/repos/apple/swift-evolution/contents/proposals/", "Request to get files")

		// Assert
		expect(request.request.method).toBe("GET")

		// Assert
		request.flush(specProposals)
		expect(await proposals).toEqual(specProposals)
	})

	// MARK: Test 3: `contents` should return contents of a file
	it("`contents` should return contents of a file", async () => {
		// Arrange

		// Act
		const markdown = firstValueFrom(service.contents("https://raw.githubusercontent.com/apple/swift-evolution/main/proposals/0001-keywords-as-argument-labels.md"))
		const request = controller.expectOne("https://raw.githubusercontent.com/apple/swift-evolution/main/proposals/0001-keywords-as-argument-labels.md", "Request to get a file’s markdown.")

		// Assert
		expect(request.request.method).toBe("GET")

		// Assert
		request.flush(keywordsAsArgumentLabels)
		// @ts-expect-error A type error.
		expect(await markdown).toEqual(keywordsAsArgumentLabels)
	})
})
