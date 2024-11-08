{
  type Person = {
    name: string;
    age: number;
    email: string;
  };

  type ValidateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => boolean;

  const validateKeys: ValidateKeys = (obj, keys) => {
    const hasAllKeysExist: boolean = keys.every((key) => key in obj);
    return hasAllKeysExist;
  };

  const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));
}
