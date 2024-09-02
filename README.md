# fn-craft
Set of functional helpers to replace imperative statements. "const over let" fans are welcome and that's just the beginning! 😎

# Install

```sh
npm install fn-craft
```

# Usage

## `fif` - Functional "if"

### `if..else` example

```js
import { fif } from 'fifel';

const isHappy = Math.random() > 0.5;
const phraseToSay = fif(
  isHappy,
  () => 'hooray',
  () => 'oh, no'
);
```

### `if` only example

`else` branch is optional. If you don't need it, you can skip it:

```js
import { fif } from 'fifel';
const result = fif(
  Math.random() > 0.5,
  () => {
    // some logic
    return 'truthy';
  }
);
```

### TypeScript
`fif` is typed. You can use it with TypeScript as well.
In previous examples, `result` types are perfectly inferred.

```ts
// returned type: string | boolean

fif(
  Math.random() > 0.5,
  () => 'truthy',
  () => false
);
```

When `else` is omitted:
```ts
// result type is: string | undefined

const result = fif(
  Math.random() > 0.5,
  () => 'truthy'
);
```

# License
[MIT](LICENSE)
