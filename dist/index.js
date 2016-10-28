'use strict';

module.exports = function () {
  return {
    visitor: {
      CallExpression: function CallExpression(path) {
        var calleePath = path.get('callee');
        if (calleePath.node.name === 'Symbol') {
          calleePath.parent.arguments = [];
        }
      }
    }
  };
};