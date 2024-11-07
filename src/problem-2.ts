{
  function removeDuplicates(numbers: number[]): number[] {
    const uniqueArr: number[] = [];

    for (const number of numbers) {
      // if a number does not exist in uniqueArr, then add this number to uniqueArr
      if (!uniqueArr.includes(number)) {
        uniqueArr.push(number);
      }
    }

    return uniqueArr;
  }

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  //   console.log(result);
}
