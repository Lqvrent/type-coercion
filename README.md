# Type Coercion

[![CI](https://github.com/Lqvrent/type-coercion/actions/workflows/main.yml/badge.svg)](https://github.com/Lqvrent/type-coercion/actions/workflows/main.yml)

## Usage
```ts
import { Coercion } from 'type-coercion';
Coercion.boolean("yes"); // true
```

## Functions
### Boolean
Defaults to `false`.
```ts
Coercion.boolean("foo"); // false

Coercion.boolean("true"); // true
Coercion.boolean("false"); // false

Coercion.boolean("yes"); // true
Coercion.boolean("no"); // false

Coercion.boolean("1"); // true
Coercion.boolean("0"); // false

Coercion.boolean("on"); // true
Coercion.boolean("off"); // false
```

### Integer
Optional options:
```ts
type Options = {
    default?: number;
    min?: number;
    max?: number;
    radix?: number;
}
```
Defaults to `0` if no default is provided.
```ts
Coercion.integer("10"); // 10
Coercion.integer("foo"); // 0
Coercion.integer("bar", { default: 10 }); // 10
Coercion.integer("84", { min: 0, max: 42 }); // 42
Coercion.integer("A", { radix: 16 }); // 10
```

### Positive Integer
Optional options:
```ts
type Options = {
    default?: number;
    min?: number;
    max?: number;
    radix?: number;
}
```
Defaults to `0` if no default is provided.
```ts
Coercion.positiveInteger("10"); // 10
Coercion.positiveInteger("-10"); // 0
Coercion.positiveInteger("foo"); // 0
Coercion.positiveInteger("bar", { default: 10 }); // 10
Coercion.positiveInteger("84", { min: 0, max: 42 }); // 42
Coercion.positiveInteger("A", { radix: 16 }); // 10
```

### Contributing
Feel free to open an issue or a pull request if you have any suggestions or improvements. Adding new coercion functions is especially welcome!

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
