'use strict';
module.exports = function () {
  return {
    visitor: {
      CallExpression(path) {
        const calleePath = path.get("callee");
        if (calleePath.node.name === 'Symbol') {
          calleePath.parent.arguments = [];
        }
      }
    }
  };
};