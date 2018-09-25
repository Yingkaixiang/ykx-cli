module.exports = {
  // 每行字符的最大数量
  printWidth: 80,
  // 缩进使用两个空格
  tabWidth: 2,
  // 缩进使用 tabs 代替空格
  useTabs: false,
  // 每条语句末尾添加分号
  semi: true,
  // 使用单引号替换双引号
  singleQuote: true,
  // 多行结尾添加逗号
  trailingComma: "all",
  // 对象的字面量前后添加空格
  bracketSpacing: true,
  // jsx标签的结尾 > 符号换行
  jsxBracketSameLine: false,
  // 箭头函数的参数必须有小括号
  // 需要进行类型声明，所有不省略
  arrowParens: "always",
  // 需要被格式化文件的开头位置
  rangeStart: 0,
  // 需要被格式化文件的结尾位置
  rangeEnd: Infinity,
  // 文件开头必须有字符串注释
  requirePragma: false,
  // 文件开头插入字符串注释
  insertPragma: false,
  // 超过每行最大的数量限制则会进行换行
  proseWrap: "never",
  // 根据不同的文件类型使用不同的解析器
  overrides: [
    {
      files: "*.less",
      options: {
        parser: "less",
      },
    },
  ],
};