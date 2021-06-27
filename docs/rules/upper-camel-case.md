# upper camel case (upper-camel-case)

[UpperCamelCase](https://wiki.c2.com/?UpperCamelCase)

[PascalCase](https://wiki.c2.com/?PascalCase)

> A naming convention, also known as PascalCase, in which several words are joined together, and the first letter of every word is capitalized. Contrast this with LowerCamelCase, in which the first letter of the entire word is lowercase, but subsequent first letters are uppercase.

```
ThisIsAnExample ... upper camel case

thisIsNotAnExample ... camel case
```

## Rule Details

This rule aims to help frontend developer keep component name as UpperCamelCase.

Examples of **incorrect** code for this rule:

```js
// demoComponentName.vue

@Component
export default class demoComponentName extends Vue {}
```

Examples of **correct** code for this rule:

```js
// DemoComponentName.vue
@Component
export default class DemoComponentName extends Vue {}
```

### Options

You can igonre some filenames by config params, such as below code.

```json
// ["index"] is your ignore filenames
{
  "component-filenames/upper-camel-case": [2, ["index"]]
}
```

## When Not To Use It

If your team have an already mature rule of nameing of component and files, you don't need this plugin.

## Further Reading

Keep filenames and component names same is Great.
