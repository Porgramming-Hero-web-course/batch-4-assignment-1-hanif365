![TYPE GUARD (1)](https://github.com/user-attachments/assets/106657e8-539b-48e2-937a-9542cf55abfe)

# TypeScript Type Guards: Keeping Your Code Safe

Imagine you going to a big party. At the door, there's a guard checking tickets. If your ticket is good, you can enter the party; otherwise, you can't. Type guards in TypeScript work the same way. They check data types in our code. If the data type is right, the code runs; if it's wrong, it doesn't run.

## Why Are Type Guards Necessary?

Type guards in TypeScript are like party bodyguards. They:

1. Keep code safe by checking data types.
2. Ensure everything works right.
3. Make code easy to manage.

Just like bodyguards at a party, they help everything run smoothly.

## Types of Type Guards

### 1. `typeof` Type Guard

The `typeof` type guard is simple and used to check basic types like `string`, `number`, and `boolean`.

#### Use Case

Use Case: Use `typeof` when we need to check for simple primitive types in functions that accept multiple types, like `string`, `number`, and `boolean`, to handle each type appropriately.

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
