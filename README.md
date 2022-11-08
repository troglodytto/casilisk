# Casilisk

- A simple typescript library that converts object keys from one case to another

```ts
const object = casilisk(
  { thisIsACamelCaseKey: "Some value" },
  CONVERTERS.SNAKE
);

console.log(object); // { this_is_a_camel_case_key: "Some value" };
```
