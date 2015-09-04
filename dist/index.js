'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (_ref) {
  var Plugin = _ref.Plugin;
  var t = _ref.types;

  return new Plugin('remove-symbol-description', {
    visitor: {
      CallExpression: function CallExpression(node, parent) {
        if (node.callee.name === 'Symbol') {
          node.arguments = [];
        }
        return node;
      }
    }
  });
};

module.exports = exports['default'];