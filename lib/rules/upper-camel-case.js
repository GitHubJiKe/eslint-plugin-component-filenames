/**
 * @fileoverview upper camel case
 * @author upper-camel-case
 */
"use strict";
const path = require("path");
const utils = require("../utils");
const uppercamelcase = require("uppercamelcase");
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	meta: {
		docs: {
			description: "upper camel case",
			category: "component filenames plugin",
			recommended: true,
		},
		fixable: null, // or "code" or "whitespace"
		schema: [
			{
				type: "array",
				items: {
					type: "string",
				},
			},
		],
	},

	create: function (context) {
		// variables should be defined here
		const ignoredFilenames = context.options[0] || ["index"];
		//----------------------------------------------------------------------
		// Helpers
		//----------------------------------------------------------------------

		// any helper functions should go here or else delete this section

		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------

		return {
			Program: function (node) {
				const filename = context.getFilename(),
					absname = path.resolve(filename),
					basename = path.basename(absname),
					noExtName = basename.split(".")[0],
					ignore = ignoredFilenames.indexOf(noExtName) !== -1;
				let exportedName = utils.getExportedName(node);

				if (ignore) return;

				if (exportedName) {
					exportedName += path.extname(filename);
				}

				if (!/^[A-Z]/g.test(basename)) {
					context.report(
						node,
						"Filename '{{name}}' first character should be upper.",
						{
							name: basename,
						}
					);
				}

				const validFilename = uppercamelcase(noExtName);

				if (validFilename !== noExtName) {
					context.report(
						node,
						"Filename '{{name}}' is not Upper Camel Case.",
						{
							name: basename,
						}
					);
				}

				if (exportedName) {
					if (basename !== exportedName) {
						context.report(
							node,
							"Filename '{{name}}' is not same as exported name {{exportedName}}.",
							{
								name: basename,
								exportedName: exportedName,
							}
						);
					}
				}
			},
		};
	},
};
