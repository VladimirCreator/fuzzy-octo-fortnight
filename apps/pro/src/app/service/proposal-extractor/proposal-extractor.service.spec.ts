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

// MARK: -Testee

// MARK:- Services
import { ProposalExtractorService } from "./proposal-extractor.service"

// MARK:- ...
import type { Proposal } from "../../types"

// MARK:- Data
import keywordsAsArgumentLabels from "!!raw-loader!../../../assets/proposals/0001-keywords-as-argument-labels.md"
import requireSelfForAccessingInstanceMembers from "!!raw-loader!../../../assets/proposals/0009-require-self-for-accessing-instance-members.md"
import flexibleMemberwiseInitialization from "!!raw-loader!../../../assets/proposals/0018-flexible-memberwise-initialization.md"
import propertyBehaviorDecls from "!!raw-loader!../../../assets/proposals/0030-property-behavior-decls.md"

// MARK: -Suite
describe("proposal-extract.service.spec.ts", () => {
	let service: ProposalExtractorService

	// MARK: Setup
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ProposalExtractorService]
		})
		service = TestBed.inject(ProposalExtractorService)
	})

	// MARK: Teardown

	// MARK: Test 1: Service is instantiable.
	it("is instantiable", () => expect(service).toBeTruthy())

	// MARK: Test 2:
	it("is able to instantiate an implemented proposal", () => {
		// Arrange
		const reference = {
			id: 1,
			name: "Allow (most) keywords as argument labels",
			authors: ["Doug Gregor"],
			"0": "implemented",
			markdown: keywordsAsArgumentLabels as unknown as string
		} as const satisfies Proposal

		// Act
		const proposal = service.extract(keywordsAsArgumentLabels as unknown as string)

		// Assert
		expect(proposal).toEqual(reference)
	})

	// MARK: Test 3
	it("is able to instantiate a rejected proposal", () => {
		// Arrange
		const reference = {
			id: 9,
			name: "Require self for accessing instance members",
			authors: ["David Hart"],
			"0": "rejected",
			markdown: requireSelfForAccessingInstanceMembers as unknown as string
			//reviewManager: ['Doug Gregor']
		} as const satisfies Proposal

		// Act
		const proposal = service.extract(requireSelfForAccessingInstanceMembers as unknown as string)

		// Assert
		expect(proposal).toEqual(reference)
	})

	// MARK: Test 4
	it("is able to instantiate a returned for revision proposal", () => {
		// Arrange
		const reference = {
			id: 18,
			name: "Flexible Memberwise Initialization",
			authors: ["Matthew Johnson"],
			"0": "returnedForRevision",
			markdown: flexibleMemberwiseInitialization as unknown as string
			//review: ['pitch', 'review', 'deferral', 'return for revision']
		} as const satisfies Proposal

		// Act
		const proposal = service.extract(flexibleMemberwiseInitialization as unknown as string)

		// Assert
		expect(proposal).toEqual(reference)
	})

	// MARK: Test 5
	it("is able to instantiate a withdrawn proposal", () => {
		// Arrange
		const reference = {
			id: 30,
			name: "Property Behaviors",
			authors: ["Joe Groff"],
			"0": "withdrawn",
			markdown: propertyBehaviorDecls as unknown as string
			//supersededBy: ,
			//review: ['pitch', 'review', 'deferral', 'return for revision']
		} as const satisfies Proposal

		// Act
		const proposal = service.extract(propertyBehaviorDecls as unknown as string)

		// Assert
		expect(proposal).toEqual(reference)
	})
})
