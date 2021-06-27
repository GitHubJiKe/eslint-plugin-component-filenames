# eslint-plugin-component-filenames

eslint plugin of component filenames

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-component-filenames`:

```
$ npm install eslint-plugin-component-filenames --save-dev
```

## Usage

Add `component-filenames` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["component-filenames"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "component-filenames/upper-camel-case": 2
  }
}
```

If you want to lint vue file, you can override you base config.

```json
{
  "overrides": [
    {
      "plugins": ["component-filenames"],
      "files": ["**/*.vue"],
      "rules": {
        "component-filenames/upper-camel-case": 2
      }
    }
  ]
}
```

If you want to ignore some filenames, you can config your rules as,

```json
{
  "rules": {
    "component-filenames/upper-camel-case": [2, ["your ignore names"]]
  }
}
```

## Supported Rules

- Fill in provided rules here
