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

## Supported Rules

- Fill in provided rules here
