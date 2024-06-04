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
import { TestBed } from "@angular/core/testing"

// MARK:- RxJS
import { of } from "rxjs"

// #endregion

// MARK: -Testee

// MARK:- Services
import { ProposalService } from "./proposal.service"

// MARK: -Testee’s dependencies
import { GitHubService } from "../github/github.service"
import { UserService } from "../user/user.service"
import { ProposalExtractorService } from "../proposal-extractor/proposal-extractor.service"

// #region -Data

import keywordsAsArgumentLabels from "!!raw-loader!../../../assets/proposals/0001-keywords-as-argument-labels.md"
import proposals from "../github/proposals.mock"
import proposal from "../proposal/proposal.mock"

// #endregion

// MARK: -Test Suite
describe("proposal.service.spec.ts", () => {
	/** Testee.
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	let service: ProposalService

	/** Testee’s dependency.
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	let githubSpy: jasmine.SpyObj<GitHubService>
	/** Testee’s dependency.
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	let usersSpy: jasmine.SpyObj<UserService>
	/** Testee’s dependency.
	 *
	 * @author Vladimir Leonidovich
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 */
	let extractorSpy: jasmine.SpyObj<ProposalExtractorService>

	// MARK: Setup
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProposalService,
				{
					provide: GitHubService,
					useValue: jasmine.createSpyObj("GitHubService", ["contents"], {
						proposals$: of(proposals)
					})
				},
				{
					provide: UserService,
					useValue: jasmine.createSpyObj("UserService", [], {
						user: {
							name: "Vlad",
							starredProposals: [1]
						},
						hasUser: true
					})
				},
				{
					provide: ProposalExtractorService,
					useValue: jasmine.createSpyObj("ProposalExtractorService", ["extract"])
				}
			]
		})

		service = TestBed.inject(ProposalService)
		githubSpy = TestBed.inject(GitHubService) as jasmine.SpyObj<GitHubService>
		githubSpy.contents.and.returnValue(of(keywordsAsArgumentLabels))
		usersSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>
		extractorSpy = TestBed.inject(ProposalExtractorService) as jasmine.SpyObj<ProposalExtractorService>
		extractorSpy.extract.and.returnValue(proposal)
	})

	// MARK: Teardown

	// MARK: Test 1: is instantitable
	it("is instantitable", () => expect(service).toBeTruthy())

	// MARK: Test 2: `proposals$` should return a list of proposals
	it("`proposals$` should return a list of proposals", (done: DoneFn) => {
		// Arrange
		const { proposals$ } = service

		// Act

		// Assert
		proposals$.subscribe(proposal => {
			expect(proposal.length).toBe(1)
			done()
		})
	})

	// MARK: Test 3: `starred$` should return a list of proposals containing only starred proposals
	it("`starred$` should return a list of proposals containing only starred proposals", (done: DoneFn) => {
		// Arrange
		const { starred$ } = service

		// Act

		// Assert
		starred$.subscribe(proposals => {
			const isEveryTrue = proposals.reduce((allStared, proposal) => proposal?.isStarred ?? false, false)
			expect(isEveryTrue).toBeTrue()
			done()
		})
	})
})
