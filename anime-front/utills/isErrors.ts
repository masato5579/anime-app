/**
 * エラーがあるかどうかチェック
 * @param {string[]} errorsKey
 * @returns {boolean}
 */
const isErrors = (errorsKey: string[]): boolean => {
  return errorsKey ? errorsKey.length !== 0 : false
}

export default isErrors
