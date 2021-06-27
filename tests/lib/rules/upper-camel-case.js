/**
 * @fileoverview upper camel case
 * @author upper-camel-case
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/upper-camel-case"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("upper-camel-case", rule, {
  valid: [
    {
      code: "DemoComponentName;",
      filename: "DemoComponentName.vue"
    }
  ],

  invalid: [
    {
      code: "demo-component-name",
      filename: "demo-component-name.vue",
      errors: [
        {
          message: "Fill me in.",
          type: "Me too"
        }
      ]
    }
  ]
});
