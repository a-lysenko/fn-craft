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

`else` branch is optional. Skip, if you don't need it, you can skip the branch:

```js
import { fif } from 'fifel';

const result = fif(
  isHappy,
  () => {
    // some logic
    return 'hooray';
  }
);
```

### TypeScript
`fif` is typed. You can use it with TypeScript as well.
In previous examples, `result` types are perfectly inferred.

```ts
// returned type: string | boolean

fif(
  isHappy,
  () => 'truthy',
  () => false
);
```

When `else` is omitted:
```ts
// result type is: string | undefined

const result = fif(
  isHappy,
  () => 'truthy'
);
```

# License
[MIT](LICENSE)
