# Require self for accessing instance members

- Proposal: [SE-0009](0009-require-self-for-accessing-instance-members.md)
- Author: [David Hart](https://github.com/hartbit)
- Review Manager: [Doug Gregor](https://github.com/DougGregor)
- Status: **Rejected**
- Decision Notes: [Rationale](https://forums.swift.org/t/rejected-se-0009-require-self-for-accessing-instance-members/930)

## Introduction

The current version of Swift (2.1) requires using `self` when accessing instance members in closures. The proposal suggests extending this to all member accesses (as is intrinsically the case in Objective-C). It has the benefit of documenting instance properties vs local variables and instance functions vs local functions or closures.

<!-- [Swift Evolution Discussion Thread](https://) -->
