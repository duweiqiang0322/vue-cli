// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  globals: { 
    "http":true
 },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-debugger":2,
    "no-extra-semi":2,
    "no-multi-spaces":2,
    'camelcase': 0, //强制驼峰法命名
    "no-unused-vars": 0, //禁止出现未使用过的变量
    "no-redeclare": 1, //禁止多次声明同一变量
    'no-use-before-define': 1, //禁止在变量定义之前使用它们
     'comma-spacing': [2, {'before': false, 'after': true}],

  }
}
