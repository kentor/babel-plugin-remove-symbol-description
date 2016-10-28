const babel = require('babel-core');
const expect = require('expect');

describe('babel-plugin-remove-symbol-description', () => {
  it('removes symbol description', () => {
    const source = "parseInt('1');\n" +
                   "Symbol('test');\n" +
                   "var a = 'a';\n" +
                   "Symbol(a);";
    const { code } = babel.transform(source, {
      plugins: [require('../dist/index')],
    });
    expect(code).toBe(
      "parseInt('1');\n" +
      "Symbol();\n" +
      "var a = 'a';\n" +
      "Symbol();"
    );
  });
});
