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

/* eslint-disable */

// #region -Dependencies

// MARK: -...
/**
 * Существует исключительно ради удобства.
 */
type Predicate = (string: string) => boolean
export type Mapper<T> = (string: string) => T

// MARK: -API reference documentation
/** Функция, которая возвращает функцию.
 *
 * @remarks
 * Старая реализация.
 *
 * @privateRemarks
 * Я экспооьиу только ради тестов
 *
 * @privateRemarks
 * Если то передаёт следующему обработчику
 *
 * @privateRemarks
 * Паттрен Chain of Responsibility
 *
 * @privateRemarks
 * Higher-order function
 *
 * @param predicate - Determines if a handler should handle a given line.
 * @param mapper - Конвертирует линию в значение необходимого типа.
 * @returns Функция.
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example
 * The following example demonstrates a basic usage.
 * it creates a function that will check if a string has more than 0 characters and if it does then it tries to convert that string into a number.
 * it is now possible to use created function.
 * ```typescript
 * const . = logic(
 * 	line => line.length !== 0, // if a string contains more than 0 characters
 * 	line => parseInt(line)     // try to transform it into a number
 * )
 * const number = .('0')
 * console.log(number) // 0
 * console.log(typeof number) // number
 * ```
 */
// MARK: -`logic`
export function logic<T>(predicate: Predicate, mapper: Mapper<T>) {
	// MARK: -API reference documentation
	/** `` is .
	 *
	 * @param line - description.
	 * @returns A value.
	 *
	 * @version 0.1.0
	 * @since 0.1.0
	 *
	 * @example .
	 * ```typescript
	 * const value = logic('')
	 * console.log(value) //
	 * ```
	 *
	 * MARK:- `logic`
	 */
	return (string: string) => {
		return predicate(string) ? mapper(string) : undefined
	}
}

// MARK: -API reference documentation
/** .
 *
 * @remarks
 * Мне пришла идея разделить то, что делате `logic` на 2 части. 1-ая часть будет создавать функции, которая будут делать, что-либо при заданном условии, а 2-ая часть будет преобразовывать входные данные в 11:39 AM Sun 21 Apr 2024.
 *
 * @param
 * @returns .
 *
 * @version 0.1.0
 * @since 0.1.0
 *
 * @example .
 * ```typescript
 * ```
 */
function TODO() {}
