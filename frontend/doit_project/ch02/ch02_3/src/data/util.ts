export const makeArray = (length: number) => new Array(length).fill(null)
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min)
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min

// makeArray: 지정한 길이만큼의 배열을 만들되, 모든 요소를 null로 채웁니다.
// range: min 이상 max 미만의 연속된 정수 배열을 반환합니다.
// random: min 이상 max 미만의 정수 난수 하나를 반환합니다.
