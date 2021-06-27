function getNodeName(node, options) {
  const op = options || [];

  if (node.type === "Identifier") {
    return node.name;
  }

  if (node.id && node.id.type === "Identifier") {
    return node.id.name;
  }

  if (
    op[2] &&
    node.type === "CallExpression" &&
    node.callee.type === "Identifier"
  ) {
    return node.callee.name;
  }
}

function getExportedName(programNode, options) {
  for (let i = 0; i < programNode.body.length; i += 1) {
    const node = programNode.body[i];

    // export default ...
    if (node.type === "ExportDefaultDeclaration") {
      return getNodeName(node.declaration, options);
    }
  }
}

function hasUpperCaseChar(str) {
  return /[A-Z]/g.test(str);
}

function hasDivider(divider) {
  return function (str) {
    return str.indexOf(divider) !== -1;
  };
}

function upperCase(str = "") {
  return str
    .split("")
    .reduce((acc, cur, idx) => {
      let tmp = idx === 0 ? cur.toUpperCase() : cur;
      return acc + tmp;
    }, "")
    .trim();
}

function firstCharIsUpper(str) {
  return hasUpperCaseChar(str[0]);
}

const hasDividerSpace = hasDivider(" ");
const hasDividerHyphen = hasDivider("-");

function convert(str, divider = " ") {
  return str
    .split(divider)
    .map((v) => upperCase(v))
    .join("")
    .trim();
}

function toUpperCamelCase(origionalName) {
  const hasSpace = hasDividerSpace(origionalName);
  const hasHyphon = hasDividerHyphen(origionalName);

  if (hasUpperCaseChar(origionalName)) {
    if (firstCharIsUpper(origionalName) && !hasSpace && !hasHyphon) {
      // DemoComponent || Democomponent
      return origionalName;
    }
  }

  if (hasSpace && hasHyphon) {
    return convert(convert(origionalName), "-");
  }

  if (hasSpace && !hasHyphon) {
    return convert(origionalName);
  }

  if (!hasSpace && hasHyphon) {
    return convert(origionalName, "-");
  }

  return upperCase(origionalName);
}

module.exports = {
  getExportedName,
  toUpperCamelCase
};
