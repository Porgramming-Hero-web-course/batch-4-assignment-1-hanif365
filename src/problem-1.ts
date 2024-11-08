{
  type SumArray = (numbers: number[]) => number;

  const sumArray: SumArray = (numbers) => {
    const sum = numbers.reduce((acc, curr) => {
      return acc + curr;
    }, 0); // here,accumulator(acc)'s initial value is 0

    return sum;
  };

  const result = sumArray([1, 2, 3, 4, 5]);
  // console.log(result);
}
