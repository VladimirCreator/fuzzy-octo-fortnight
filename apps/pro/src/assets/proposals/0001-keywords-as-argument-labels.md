# Allow (most) keywords as argument labels

- Proposal: [SE-0001](0001-keywords-as-argument-labels.md)
- Author: [Doug Gregor](https://github.com/DougGregor)
- Status: **Implemented (Swift 2.2)**
- Bug: [SR-344](https://bugs.swift.org/browse/SR-344)

## Introduction

Argument labels are an important part of the interface of a Swift function, describing what particular arguments to the function do and improving readability. Sometimes, the most natural label for an argument coincides with a language keyword, such as `in`, `repeat`, or `defer`. Such keywords should be allowed as argument labels, allowing better expression of these interfaces.
