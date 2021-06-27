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

module.exports = {
  getExportedName
};
