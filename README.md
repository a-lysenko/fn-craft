# fn-craft

[![npm version](https://img.shields.io/npm/v/fn-craft?color=green)](https://img.shields.io/npm/v/fn-craft?color=green)
[![npm license](https://img.shields.io/npm/l/fn-craft)](https://img.shields.io/npm/l/fn-craft)

[![github workflow status](https://img.shields.io/github/actions/workflow/status/a-lysenko/fn-craft/npm-publish.yml
)](https://img.shields.io/github/actions/workflow/status/a-lysenko/fn-craft/npm-publish.yml
)

[![technology typescript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)


Set of functional helpers to replace imperative statements. `"const over let"` fans are welcome and that's just the beginning! 😎


# Table of contents
- [Install](#install)
- [Features](#features)
  - [`fif` - Functional "if"](#fif---functional-if)
    - [`if..else` example](#ifelse-example)
    - [`if` example](#if-example)
    - [TypeScript](#typescript)
  - [`ftry` - Functional "try..catch..finally*"](#ftry---functional-trycatchfinally)
    - [`try..catch` example](#trycatch-example)
    - [`try..catch..finally` example](#trycatchfinally-example)
- [License](#license)

# Install

Using npm:
```sh
npm install fn-craft
```

Using yarn:
```sh
yarn add fn-craft
```

# Typescript-first
`fn-craft` is written in TypeScript and fully typed.

The package is primarily designed for TypeScript projects, offering complete type definitions to enhance type safety 
and development efficiency. It addresses various use cases with thorough typing support. 🚀
JavaScript projects are also supported with full compatibility, ensuring easy integration.

# Features

## `fif` - Functional "if"

### `if..else` example

```js
import { fif } from 'fn-craft';

const isHappy = Math.random() > 0.5;
const phraseToSay = fif(
  isHappy,
  () => 'hooray',
  () => 'oh, no'
);
```

### `if` example

`else` branch is optional. If you don't need it, skip the branch:

```js
import { fif } from 'fn-craft';

const result = fif(
  isHappy,
  () => {
    // some logic
    return 'hooray';
  }
);
```

### TypeScript
Using previous examples with TypeScript, `fif` return types are perfectly inferred.

```ts
// ✅ returned type: string | boolean

fif(
  isHappy,
  () => 'truthy',
  () => false
);
```

When `else` is omitted:
```ts
// ✅ returned type: string | undefined

const result = fif(
  isHappy,
  () => 'truthy'
);
```

## `ftry` - Functional "try..catch..finally*"

### `try..catch` example

```js
import { ftry } from 'fn-craft';

function getFoodBox() {
  if (new Date().getHours() > 12) {
    throw new Error('Food box is empty');
  };

  return {
    fruits: {
      banana: 30,
      orange: 40
    }
  };
}

const fruits = ftry(
  () => {
    const foodBox = getFoodBox();
    return foodBox.fruits;
  },
  (error) => {
    logError(error);
    const defaultFruits = {
      apple: 10,
      banana: 20
    };
    console.log('Default fruits are used:', defaultFruits);
    return defaultFruits;
  }
);
```

### `try..catch..finally` example

```js
import { ftry } from 'fn-craft';

function getFoodBox() {
  if (new Date().getHours() > 12) {
    throw new Error('Food box is empty');
  };
  
  return {
    fruits: {
      banana: 30,
      orange: 40
    }
  };
}

const fruits = ftry(
  () => {
    const foodBox = getFoodBox();
    return foodBox.fruits;
  },
  (error) => {
    logError(error);
    const defaultFruits = {
      apple: 10,
      banana: 20
    };
    console.log('Default fruits are used:', defaultFruits);
    return defaultFruits;
  },
  () => {
    callFriendsToEat(); // or do some cleanup
    // return from here is IGNORED
  }
);
```

### TypeScript
Using previous examples with Typescript, `ftry` return types are perfectly inferred.

```ts
// declared as:
function getFoodBox(): { fruits: { banana: number; orange: number; } }

// ✅ returned type: 
// { banana: number; orange: number; } | { apple: number; banana: number; }

ftry(
  () => {
    const foodBox = getFoodBox();
    return foodBox.fruits;
  },
  (error) => {
    logError(error);
    const defaultFruits = {
      apple: 10,
      banana: 20
    };
    console.log('Default fruits are used:', defaultFruits);
    return defaultFruits;
  }
);
```

# License
[MIT](LICENSE)
