{
  type Person = {
    name: string;
    age: number;
  };

  type GetProperty = <T, P extends keyof T>(obj: T, property: P) => T[P];

  const getProperty: GetProperty = (obj, property) => {
    return obj[property];
  };

  const person: Person = { name: "Alice", age: 30 };
  const personName = getProperty(person, "name");

  //   console.log(personName);
}
