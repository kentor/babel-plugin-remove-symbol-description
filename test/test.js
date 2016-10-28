const babel = require('babel-core');
const expect = require('expect');

describe('babel-plugin-remove-symbol-description', () => {
  it('removes symbol description', () => {
    const source = [
      "parseInt('1');",
      "Symbol('test');",
      "var a = 'a';",
      'Symbol(a);',
    ].join('\n');
    const { code } = babel.transform(source, {
      plugins: [require('../dist/index')],
    });
    expect(code).toBe([
      "parseInt('1');",
      'Symbol();',
      "var a = 'a';",
      'Symbol();',
    ].join('\n'));
  });
});
