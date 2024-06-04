# Flexible Memberwise Initialization

- Proposal: [SE-0018](0018-flexible-memberwise-initialization.md)
- Author: [Matthew Johnson](https://github.com/anandabits)
- Review Manager: [Chris Lattner](https://github.com/lattner)
- Status: **Returned for revision**
- Review: ([pitch](https://forums.swift.org/t/proposal-draft-flexible-memberwise-initialization/698)) ([review](https://forums.swift.org/t/review-se-0018-flexible-memberwise-initialization/939)) ([deferral](https://forums.swift.org/t/review-se-0018-flexible-memberwise-initialization/939/22)) ([return for revision](https://forums.swift.org/t/returning-or-rejecting-all-the-deferred-evolution-proposals/60724))

## Introduction

The Swift compiler is currently able to generate a memberwise initializer for use in some circumstances, however there are currently many limitations to this. This proposal builds on the idea of a compiler generated memberwise initializer, making the capability available to any initializer that opts in.
