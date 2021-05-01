export const randomStartingNumber = (
  startingNumbers: number[] = [2, 4]
): number => {
  const randomNumber =
    startingNumbers[Math.floor(Math.random() * startingNumbers.length)]
  return randomNumber
}
