export const ageOptions = () => {
  const arr = []
  for (let num = 0; num <= 120; num++) {
    arr.push({ value: num, viewValue: num })
  }
  return arr
}

export const sexOptions = [
  { value: 0, viewValue: '男' },
  { value: 1, viewValue: '女' },
  { value: 2, viewValue: 'どちらでもない' },
]
