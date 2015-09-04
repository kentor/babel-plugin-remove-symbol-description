export default function ({ Plugin, types: t }) {
  return new Plugin('remove-symbol-description', {
    visitor: {
      CallExpression: function (node, parent) {
        if (node.callee.name === 'Symbol') {
          node.arguments = [];
        }
        return node;
      }
    }
  });
}
