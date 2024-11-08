# TypeScript Type Guards: Keeping Your Code Safe

Imagine you're going to a big, fancy party. At this party, there are bodyguards who check if guests should be allowed inside and where they can go. TypeScript type guards work a lot like these bodyguards, but instead of checking people, they check the types of data in our code.

## Why Are Type Guards Necessary?

Just like at a party, where bodyguards ensure that only invited guests can enter and go to the right sections, type guards in TypeScript make sure that the data being used in our code is of the expected type. This is important because:

1. **Safety**: Type guards prevent our code from breaking due to incorrect data types, similar to how a party is protected from disruption by uninvited guests.
2. **Correctness**: They help ensure that functions and methods work correctly without errors, much like how a party runs smoothly when everyone is in their designated places.
3. **Ease of Maintenance**: Type guards make our code easier to read and maintain, as like how a well-organized event is easier to manage.

By acting as the gatekeepers of data types, type guards play a vital role in maintaining the integrity and functionality of our code, ensuring everything operates as intended, just as bodyguards keep a party safe and orderly.

## Types of Type Guards

### 1. `typeof` Type Guard

The `typeof` type guard is simple and used to check basic types like `string`, `number`, and `boolean`.

#### Use Case

Use Case: Use `typeof` when you need to check for simple primitive types in functions that accept multiple types, like `string`, `number`, and `boolean`, to handle each type appropriately.

```typescript
const checkInvitation = (invitation: string | number) => {
  if (typeof invitation === "string") {
    console.log("VIP Pass: " + invitation);
  } else {
    console.log("General Ticket: " + invitation);
  }
};
```

### 2. `instanceof` Type Guard

The `instanceof` type guard checks if an object is an instance of a specific class. It is useful for class-based instances.

#### Use Case

Use `instanceof` when working with class instances.

```typescript
class VIPGuest {
  showPass() {
    console.log("VIP Pass validated. Welcome to the exclusive area!");
  }
}

class RegularGuest {
  showTicket() {
    console.log("Ticket validated. Enjoy the event!");
  }
}

const checkEntrance = (guest: VIPGuest | RegularGuest) => {
  if (guest instanceof VIPGuest) {
    guest.showPass();
  } else {
    guest.showTicket();
  }
};
```

### 3. Custom Type Guards (Using `is` keyword)

Custom type guards allow for more complex checks, especially useful with interfaces or objects that share similar properties.

#### Use Case

Use custom type guards for unique checks that other type guards can’t handle.

```typescript
interface BengaliRecipe {
  prepareBengaliDish: () => void;
}

interface ChineseRecipe {
  prepareChineseDish: () => void;
}

function isBengaliRecipe(
  expert: BengaliRecipe | ChineseRecipe
): expert is BengaliRecipe {
  return (expert as BengaliRecipe).prepareBengaliDish !== undefined;
}

function demonstrateRecipe(expert: BengaliRecipe | ChineseRecipe) {
  if (isBengaliRecipe(expert)) {
    expert.prepareBengaliDish();
  } else {
    expert.prepareChineseDish();
  }
}
```

### 4. `in` Operator Type Guard

The `in` operator checks if a specific property exists within an object, useful for objects with unique properties.

#### Use Case

Use the `in` operator for union types with different methods or properties.

```typescript
type ChiefGuest = { takeSpecialSeat: () => void };
type GeneralGuest = { takeGeneralSeat: () => void };

function seatGuest(guest: ChiefGuest | GeneralGuest) {
  if ("takeSpecialSeat" in guest) {
    console.log(
      "Welcome, honored guest! Please follow me to your special seat."
    );
    guest.takeSpecialSeat();
  } else {
    console.log("Welcome! Please take your seat in the general area.");
    guest.takeGeneralSeat();
  }
}
```

## Summary

Just like bodyguards at a party ensure everything runs smoothly by checking each guest, TypeScript type guards keep our code safe by ensuring variables are the expected type before they’re used. This not only prevents possible errors but also makes the code easier to understand and maintain.

Think of each type guard as a personal bodyguard for your code, keeping bugs at bay and helping your application run smoothly, like a well-planned party!

```

```
